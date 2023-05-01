import { Injectable } from '@angular/core'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly toastConfig: MatSnackBarConfig = {
    duration: 2000,
  }

  public constructor(private snackBar: MatSnackBar) {}

  public success(message: string) {
    this.snackBar.open(message, '', this.toastConfig)
  }

  public fail(message: string) {
    this.snackBar.open(message, '', {
      ...this.toastConfig,
      panelClass: 'snack-bar-error',
    })
  }
}
