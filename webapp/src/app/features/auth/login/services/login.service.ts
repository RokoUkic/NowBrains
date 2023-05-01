import { Injectable } from '@angular/core';
import { AuthApi } from '@core/apis/auth.api';
import { map, Observable } from 'rxjs';

import { convertLoginSuccessDAOToLoginSuccess } from '../converters/convert-login-success-dao-to-login-success.converter';
import { LoginSuccessModel } from '../models/views/login-success.model';

@Injectable()
export class LoginService {
  public constructor(private authApi: AuthApi) {}

  public login(
    username: string,
    password: string
  ): Observable<LoginSuccessModel> {
    return this.authApi
      .login(username, password)
      .pipe(map((it) => convertLoginSuccessDAOToLoginSuccess(it.data)));
  }
}
