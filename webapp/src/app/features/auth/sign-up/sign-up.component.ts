import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  public formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    level: new FormControl('', [Validators.required]),
  });

  public constructor(private router: Router) {}

  public goToLoginPage(): void {
    this.router.navigate(['/login']);
  }

  public submit(): void {}
}
