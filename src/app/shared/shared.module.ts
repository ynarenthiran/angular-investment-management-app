import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, MatProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { BusyLoaderComponent } from './components';
import { RestrictInputDirective } from './directives';

@NgModule({
  imports: [
    CommonModule,
    // MaterialModule,
    FlexLayoutModule,
    CdkTableModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    // Components
    BusyLoaderComponent,

    // Directives
    RestrictInputDirective
  ],
  exports: [
    CommonModule,
    // MaterialModule,
    FlexLayoutModule,
    CdkTableModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,

    // Components
    BusyLoaderComponent,

    // Directives
    RestrictInputDirective
  ]
})
export class SharedModule { }
