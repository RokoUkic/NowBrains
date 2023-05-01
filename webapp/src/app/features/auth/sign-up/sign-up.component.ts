import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AppService } from '@services/app.service'
import { LoadingService } from '@services/loading.service'
import { ToastService } from '@services/toast.service'
import { finalize } from 'rxjs'
import { RegisterService } from './services/register.service'

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  public formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    userLevel: new FormControl('', [Validators.required]),
  })

  public constructor(
    private router: Router,
    private registerService: RegisterService,
    private appService: AppService,
    private loadingService: LoadingService,
    private toastService: ToastService,
  ) {}

  public goToLoginPage(): void {
    this.router.navigate(['/login'])
  }

  public submit(): void {
    if (this.formGroup.invalid) {
      return
    }

    this.loadingService.open()
    const { username, userLevel, password } = this.formGroup.value

    this.registerService
      .register(username!, password!, userLevel!)
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
