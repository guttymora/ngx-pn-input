import { NgModule } from '@angular/core';
import { NgxPnInputComponent } from './ngx-pn-input.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [NgxPnInputComponent],
  imports: [
      CommonModule,
      BrowserModule,
  ],
  exports: [NgxPnInputComponent]
})
export class NgxPnInputModule { }
