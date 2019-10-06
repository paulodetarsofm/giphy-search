import { Component, Input } from '@angular/core';
import { GiphyGif } from '../model/giphy-gif.model';

@Component({
  selector: 'app-giphy-search-list',
  templateUrl: './giphy-search-list.component.html',
  styleUrls: ['./giphy-search-list.component.scss']
})
export class GiphySearchListComponent {

  @Input()
  gifsList: GiphyGif[];

}
