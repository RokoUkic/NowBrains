import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/login/login.module').then((it) => it.LoginModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./features/auth/sign-up/sign-up.module').then(
        (it) => it.SignUpModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
