import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageTitleService } from '../../shared/service/page-title.service';
import { GiphyGif } from '../model/giphy-gif.model';
import { GiphyResponse } from '../model/giphy-response.model';
import { GiphySearchService } from '../service/giphy-search.service';

@Component({
  selector: 'app-giphy-search-manual',
  templateUrl: './giphy-search-manual.component.html',
  styleUrls: ['./giphy-search-manual.component.scss']
})
export class GiphySearchManualComponent implements OnInit {

  gifs = new Array<GiphyGif>();
  searchForm: FormGroup;

  public readonly LIMIT = 10;

  constructor(
    private fb: FormBuilder,
    private giphyService: GiphySearchService,
    private pageTitleService: PageTitleService
  ) {

  }

  ngOnInit() {
    this.initForm();
    this.setPageTitle();
  }

  private initForm(): void {
    this.searchForm = this.fb.group({
      limit: [this.LIMIT, [Validators.required]],
      term: ['', [Validators.required]],
    });
  }

  private setPageTitle(): void {
    this.pageTitleService.setNewTitle('Pesquisa Manual');
  }

  search(): void {

    if (!this.searchForm.valid) {
      return;
    }

    const limit = this.searchForm.get('limit').value;
    const term = this.searchForm.get('term').value;

    this.giphyService
      .search(limit, term)
      .subscribe((response: GiphyResponse) => {
        if (!!response) {
          this.gifs = response.data;
        }
      });
  }
}
