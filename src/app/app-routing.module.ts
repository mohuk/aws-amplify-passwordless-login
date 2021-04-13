import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPasswordLessComponent } from './login-password-less/login-password-less.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignedInComponent } from './signed-in/signed-in.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-passwordless/email/:email/code/:code',
    component: LoginPasswordLessComponent

  },
  {
    path: 'signed-in',
    component: SignedInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
