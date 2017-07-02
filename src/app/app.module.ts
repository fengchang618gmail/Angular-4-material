import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule  } from '@angular/forms';
import { MdAutocompleteModule, MdInputModule } from '@angular/material';

import { MdCheckboxModule } from '@angular/material';

import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';

import { MdRadioModule } from '@angular/material';

import { FormsModule } from '@angular/forms';

import { MdSelectModule } from '@angular/material';

import { MdSliderModule } from '@angular/material';

import { MdCardModule } from '@angular/material';

import { MdSlideToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
    MdInputModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    FormsModule,
    MdSelectModule,
    MdSliderModule,
    MdCardModule,
    MdSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
