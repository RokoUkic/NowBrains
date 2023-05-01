import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthGuard } from './guards/auth.guard'
import { AnonymousGuard } from './guards/anonymous.guard'
import { AuthApi } from './apis/auth.api'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpRequestHeaderInterceptor } from './interceptors/http-request-header.interceptor'
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor'

@NgModule({
  declarations: [],
  providers: [
    AuthGuard,
    AnonymousGuard,
    AuthApi,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {}
