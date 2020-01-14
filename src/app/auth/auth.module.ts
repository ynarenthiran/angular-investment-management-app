import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatButtonModule } from '@angular/material';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
