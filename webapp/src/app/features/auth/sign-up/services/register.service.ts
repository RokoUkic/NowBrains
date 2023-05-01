import { Injectable } from '@angular/core'
import { AuthApi } from '@core/apis/auth.api'
import { map, Observable } from 'rxjs'

import { convertRegisterSuccessDAOToRegisterSuccess } from '../converters/convert-register-success-dao-to-register-success.converter'
import { RegisterSuccessModel } from '../models/views/register-success.model'

@Injectable()
export class RegisterService {
  public constructor(private authApi: AuthApi) {}

  public register(
    username: string,
    password: string,
    userLevel: string,
  ): Observable<RegisterSuccessModel> {
    return this.authApi
      .register(username, password, userLevel)
      .pipe(map((it) => convertRegisterSuccessDAOToRegisterSuccess(it.data)))
  }
}
