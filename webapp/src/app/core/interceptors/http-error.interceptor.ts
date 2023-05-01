import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@constants/user-key-storage.constant'
import { HttpStatusCode } from '@models/enums/http-status-code.model'
import { AppService } from '@services/app.service'
import { catchError, noop, Observable, switchMap, throwError } from 'rxjs'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  public constructor(private router: Router, private appService: AppService) {}
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        switch (httpErrorResponse.status) {
          case HttpStatusCode.Unauthorized:
            this.router.navigate(['/login']).then(noop)
            break

          case HttpStatusCode.ExpiredToken:
            return this.appService.retrieveAccessToken().pipe(
              switchMap((value) => {
                const { accessToken, refreshToken } = value

                this.appService.setToken(accessToken, refreshToken)

                return next.handle(
                  req.clone({
                    setHeaders: {
                      [ACCESS_TOKEN_KEY]: accessToken || '',
                      [REFRESH_TOKEN_KEY]: refreshToken || '',
                    },
                  }),
                )
              }),
            )
        }

        return throwError(() => httpErrorResponse)
      }),
    )
  }
}
