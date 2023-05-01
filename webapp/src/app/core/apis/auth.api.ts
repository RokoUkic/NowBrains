import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAbstraction } from '../abstraction/api.abstraction';

@Injectable()
export class AuthApi extends ApiAbstraction {
  public constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  public login(
    username: string,
    password: string
  ): Observable<ResponseDAOModel<LoginSuccessDAOModel>> {
    return this.httpClient.post<ResponseDAOModel<LoginSuccessDAOModel>>(
      `${this.path}/signin`,
      {
        username,
        password,
      }
    );
  }

  public register(
    username: string,
    password: string,
    userLevel: string
  ): Observable<ResponseDAOModel<RegisterSuccessDAOModel>> {
    return this.httpClient.post<ResponseDAOModel<RegisterSuccessDAOModel>>(
      `${this.path}/signup`,
      {
        userLevel,
        username,
        password,
      }
    );
  }

  public retrieveAccessToken(): Observable<any> {
    return this.httpClient.get(`${this.path}/retrieve-access-token`);
  }

  protected definePath(): string {
    return '';
  }
}
