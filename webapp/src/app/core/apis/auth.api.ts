import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiAbstraction } from '../abstraction/api.abstraction';

@Injectable()
export class AuthApi extends ApiAbstraction {
  public constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  protected definePath(): string {
    return 'auth';
  }
}
