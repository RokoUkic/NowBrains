import { Injectable } from '@angular/core';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from '@constants/user-key-session-storage.constant';
import { convertUserDAOToUser } from '@converters/convert-user-dao-to-user.converter';
import { AuthApi } from '@core/apis/auth.api';
import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import { AppStore } from '../stores/app.store';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly innerIsLoggedIn$ = new BehaviorSubject<boolean>(false);

  public readonly isLoggedIn$ = this.innerIsLoggedIn$.asObservable();

  public constructor(private appStore: AppStore, private authApi: AuthApi) {}

  public setToken(accessToken: string, refreshToken: string): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }

  public retrieveAccessToken(): Observable<any> {
    return this.authApi.retrieveAccessToken().pipe(map((it) => it.data));
  }

  public updateCurrentUser(userDetails: UserDetailsModel | null): void {
    this.innerIsLoggedIn$.next(!!userDetails);
    this.appStore.updateCurrentUser(userDetails);
  }

  public getUserDetails(): Observable<UserDetailsModel | null> {
    return this.appStore.getUserDetails();
  }

  public logOut(): void {
    localStorage.clear();
    this.appStore.updateCurrentUser(null);
  }
}
