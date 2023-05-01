import { Injectable } from '@angular/core'
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router'
import { ACCESS_TOKEN_KEY } from '@constants/user-key-storage.constant'
import { AppService } from '@services/app.service'

@Injectable()
export class AnonymousGuard implements CanActivate, CanActivateChild {
  public constructor(private router: Router) {}

  public canActivate(): boolean | UrlTree {
    return this.verifyIsNotLoggedIn()
  }

  public canActivateChild(): boolean | UrlTree {
    return this.verifyIsNotLoggedIn()
  }

  private verifyIsNotLoggedIn(): boolean | UrlTree {
    return !localStorage.getItem(ACCESS_TOKEN_KEY) || this.router.createUrlTree(['/'])
  }
}
