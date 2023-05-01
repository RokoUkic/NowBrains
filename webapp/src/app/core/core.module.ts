import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { AnonymousGuard } from './guards/anonymous.guard';
import { AuthApi } from './apis/auth.api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [AuthGuard, AnonymousGuard, AuthApi],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {}
