import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AppService } from '@services/app.service'
import { LoadingService } from '@services/loading.service'
import { ToastService } from '@services/toast.service'
import { finalize } from 'rxjs'

import { LoginService } from './services/login.service'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  public constructor(
    private router: Router,
    private loginService: LoginService,
    private appService: AppService,
    private loadingService: LoadingService,
    private toastService: ToastService,
  ) {}

  public goToSignUpPage(): void {
    this.router.navigate(['/sign-up'])
  }

  public submit(): void {
    if (this.formGroup.invalid) {
      return
    }

    this.loadingService.open()
    const { username, password } = this.formGroup.value

    this.loginService
      .login(username!, password!)
      .pipe(finalize(() => this.loadingService.close()))
      .subscribe({
        next: (value) => {
          this.appService.setToken(value.accessToken, value.refreshToken)
          this.appService.updateCurrentUser(value.user)

          this.router.navigate([''])
        },
        error: ({ error }) => {
          this.toastService.fail(error.message)
        },
      })
  }
}
