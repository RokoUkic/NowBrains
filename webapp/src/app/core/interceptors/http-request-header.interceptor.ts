import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from '@constants/user-key-session-storage.constant';

export class HttpRequestHeaderInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request = req.clone({
      setHeaders: {
        'st-access-token': localStorage.getItem(ACCESS_TOKEN_KEY) || '',
        'st-refresh-token': localStorage.getItem(REFRESH_TOKEN_KEY) || '',
      },
    });

    return next.handle(request);
  }
}
