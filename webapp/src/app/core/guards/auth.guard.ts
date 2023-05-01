import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { AppService } from '@services/app.service';
import { map, Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  public constructor(private router: Router, private appService: AppService) {}

  public canActivate(): Observable<boolean | UrlTree> {
    return this.verifyIsLoggedIn();
  }

  public canActivateChild(): Observable<boolean | UrlTree> {
    return this.verifyIsLoggedIn();
  }

  private verifyIsLoggedIn(): Observable<boolean | UrlTree> {
    return this.appService
      .getUserDetails()
      .pipe(map((it) => !!it || this.router.createUrlTree(['/login'])));
  }
}