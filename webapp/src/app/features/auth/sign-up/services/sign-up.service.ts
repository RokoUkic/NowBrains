import { Injectable } from '@angular/core';
import { AuthApi } from '@core/apis/auth.api';

@Injectable()
export class SignUpService {
  public constructor(private authApi: AuthApi) {}

  public signUp(): void {
    // TODO: Implement me
  }
}
