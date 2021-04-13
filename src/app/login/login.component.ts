import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
  <!--The content below is only a placeholder and can be replaced.-->
  <div style="text-align:center" class="content">
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <label>
        Email:
        <input type="text" formControlName="email">
      </label>
      <br>
      <label>
        Password:
        <input type="password" formControlName="password">
      </label>
      <br>
      <button type="submit" [disabled]="!loginForm.valid">Submit</button>
    </form>
    <a routerLink="/sign-up">Sign up</a><br>
  </div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  signedIn = false;
  user;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public async onSubmit() {
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    //login with password
    if(password) {
      const user: CognitoUser = await Auth.signIn(email, password);
      this.router.navigate(['/signed-in']);
    } else {
      //passwordless
      let metadata = {
        deviceType: 'web'
      };
      this.user = await Auth.signIn(email, undefined, metadata);
      alert('email sent');
    }
  }

}
