import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';

export declare type SnackbarType = 'error' | 'warning' | 'success' | 'info';
@Component({
  selector: 'app-snack-bar',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackBarComponent {

  message: string;

  type: SnackbarType;

  constructor() {

  }
}
