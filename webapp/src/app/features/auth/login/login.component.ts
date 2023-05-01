import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '@services/app.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  public constructor(
    private router: Router,
    private loginService: LoginService,
    private appService: AppService
  ) {}

  public goToSignUpPage(): void {
    this.router.navigate(['/sign-up']);
  }

  public submit(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const { username, password } = this.formGroup.value;

    this.loginService.login(username!, password!).subscribe({
      next: (value) => {
        this.appService.setToken(value.accessToken, value.refreshToken);
        this.appService.updateCurrentUser(value.user);

        this.router.navigate(['']);
      },
    });
  }
}
