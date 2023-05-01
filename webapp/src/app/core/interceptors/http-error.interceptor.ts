import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from '@constants/user-key-session-storage.constant';
import { STHttpStatusCode } from '@models/enums/http-status-code.model';
import { AppService } from '@services/app.service';
import { catchError, noop, Observable, switchMap, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  public constructor(private router: Router, private appService: AppService) {}
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        switch (httpErrorResponse.status) {
          case STHttpStatusCode.Unauthorized:
            this.router.navigate(['/login']).then(noop);
            break;

          case STHttpStatusCode.ExpiredToken:
            return this.appService.retrieveAccessToken().pipe(
              switchMap((value) => {
                const { accessToken, refreshToken } = value;

                this.appService.setToken(accessToken, refreshToken);

                return next.handle(
                  req.clone({
                    setHeaders: {
                      'st-access-token':
                        localStorage.getItem(ACCESS_TOKEN_KEY) || '',
                      'st-refresh-token':
                        localStorage.getItem(REFRESH_TOKEN_KEY) || '',
                    },
                  })
                );
              })
            );
        }

        return throwError(() => httpErrorResponse);
      })
    );
  }
}
