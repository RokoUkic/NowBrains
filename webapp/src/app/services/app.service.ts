import { Injectable } from '@angular/core';
import { USER_KEY_SESSION_STORAGE } from '@constants/user-key-session-storage.constant';
import { Observable, of } from 'rxjs';
import { AppStore } from '../stores/app.store';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public constructor(private appStore: AppStore) {}

  public updateUserDetails(userDetails: UserDetailsModel | null): void {
    this.appStore.updateUserDetails(userDetails);
  }

  public getUserDetails(): Observable<UserDetailsModel | null> {
    const user = sessionStorage.getItem(USER_KEY_SESSION_STORAGE)
      ? JSON.parse(sessionStorage.getItem(USER_KEY_SESSION_STORAGE)!)
      : null;

    if (user) {
      return of(user);
    }

    return this.appStore.getUserDetails();
  }

  public logOut(): void {
    sessionStorage.clear();
    this.appStore.updateUserDetails(null);
  }
}
