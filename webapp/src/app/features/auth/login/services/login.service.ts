import { Injectable } from '@angular/core';
import { AuthApi } from '@core/apis/auth.api';

@Injectable()
export class LoginService {
  public constructor(private authApi: AuthApi) {}

  public login(): void {
    // TODO: Implement me
  }
}
