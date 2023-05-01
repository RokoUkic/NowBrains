import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AnonymousGuard } from '@core/guards/anonymous.guard'
import { AuthGuard } from '@core/guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/login/login.module').then((it) => it.LoginModule),
    canActivate: [AnonymousGuard],
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./features/auth/sign-up/sign-up.module').then((it) => it.SignUpModule),
    canActivate: [AnonymousGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((it) => it.DashboardModule),
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
