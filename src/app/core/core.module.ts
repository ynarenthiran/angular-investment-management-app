import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  MatSnackBarModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import {
  AuthService,
  SnackBarService,
  AppTitleService,
  FixedDepositService,
  InMemoryDBService,
  BaseService,
  UserService,
  DialogService
} from './services';
import { AppRouteGuard } from './route-guards';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { SnackBarComponent } from './components/snackbar';
import { DialogComponent } from './components/dialog/dialog.component';

const MaterialModule = [
  MatSnackBarModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    InMemoryWebApiModule.forRoot(InMemoryDBService, {
      apiBase: '/',
      delay: 1000
    })
  ],
  declarations: [
    NotFoundComponent,
    BaseLayoutComponent,
    SnackBarComponent,
    DialogComponent
  ],
  providers: [
    // services
    AuthService,
    SnackBarService,
    AppTitleService,
    FixedDepositService,
    BaseService,
    UserService,
    DialogService,

    // route guards
    AppRouteGuard
  ],
  // exports: [
  //   MaterialModule
  // ],
  entryComponents: [
    SnackBarComponent,
    DialogComponent
  ]
})
export class CoreModule { }
