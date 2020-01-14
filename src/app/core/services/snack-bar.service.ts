import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { SnackBarComponent, SnackbarType } from '../components/snackbar';

@Injectable()
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  showError(message: string, action?: string, config?: MatSnackBarConfig) {
    config = { ...config, ...{duration: 3000} };
    return this.prepareAndGetSnackBarRef(message, 'error', action, config);
  }

  showWarning(message: string, action?: string, config?: MatSnackBarConfig) {
    return this.prepareAndGetSnackBarRef(message, 'warning', action, config);
  }

  showSuccess(message: string, action?: string, config?: MatSnackBarConfig) {
    return this.prepareAndGetSnackBarRef(message, 'success', action, config);
  }

  showInfo(message: string, action?: string, config?: MatSnackBarConfig) {
    return this.prepareAndGetSnackBarRef(message, 'info', action, config);
  }

  private prepareAndGetSnackBarRef(message: string, type: SnackbarType, action?: string, config?: MatSnackBarConfig) {
    const defaultConfig = {
      duration: 3000
    };
    config = { ...defaultConfig, ...config };
    const snackBarRef = this.snackBar.openFromComponent<SnackBarComponent>(SnackBarComponent, config);
    snackBarRef.instance.message = message;
    snackBarRef.instance.type = type;
    return snackBarRef;
  }
}
