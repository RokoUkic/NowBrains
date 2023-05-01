import { Injectable } from '@angular/core'
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router'
import { ACCESS_TOKEN_KEY } from '@constants/user-key-storage.constant'

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  public constructor(private router: Router) {}

  public canActivate(): boolean | UrlTree {
    return this.verifyIsLoggedIn()
  }

  public canActivateChild(): boolean | UrlTree {
    return this.verifyIsLoggedIn()
  }

  private verifyIsLoggedIn(): boolean | UrlTree {
    return !!localStorage.getItem(ACCESS_TOKEN_KEY) || this.router.createUrlTree(['/login'])
  }
}
