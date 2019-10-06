import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PageTitleService } from './service/page-title.service';

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],

  exports: [
    CommonModule,
  ],

  providers: [
    PageTitleService,
  ],

})
export class SharedModule { }
