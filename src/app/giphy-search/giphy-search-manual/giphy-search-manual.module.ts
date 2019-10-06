import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { GiphySearchListModule } from '../giphy-search-list/giphy-search-list.module';
import { GiphySearchService } from '../service/giphy-search.service';
import { GiphySearchManualComponent } from './giphy-search-manual.component';

@NgModule({

  declarations: [
    GiphySearchManualComponent,
  ],

  imports: [
    SharedModule,
    ReactiveFormsModule,
    GiphySearchListModule,
  ],

  exports: [
    GiphySearchManualComponent,
  ],

  providers: [
    HttpClientModule,
    GiphySearchService,
  ],

})
export class GiphySearchManualModule { }
