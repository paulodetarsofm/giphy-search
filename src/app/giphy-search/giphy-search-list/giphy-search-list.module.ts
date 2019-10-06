import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GiphySearchListComponent } from './giphy-search-list.component';

@NgModule({

  declarations: [
    GiphySearchListComponent,
  ],

  imports: [
    SharedModule,
  ],

  exports: [
    GiphySearchListComponent,
  ],

})
export class GiphySearchListModule { }
