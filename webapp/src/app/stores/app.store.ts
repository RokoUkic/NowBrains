import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStore {
  private innerUserDetails$ = new BehaviorSubject<UserDetailsModel | null>(
    null
  );

  public getUserDetails(): Observable<UserDetailsModel | null> {
    return this.innerUserDetails$.asObservable();
  }

  public updateCurrentUser(userDetails: UserDetailsModel | null): void {
    this.innerUserDetails$.next(userDetails);
  }
}
