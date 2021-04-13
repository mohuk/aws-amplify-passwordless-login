import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-sign-up',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
      <label>
          Full name:
          <input type="text" formControlName="name">
        </label>
        <br>
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
        <button type="submit" [disabled]="!signUpForm.valid">Submit</button>
      </form>
      <a routerLink="/login">Login</a><br>
    </div>
  `,
  styles: [
  ]
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  public async onSubmit() {
    const signUp = Auth.signUp({
      username: this.signUpForm.controls['email'].value,
      password: this.signUpForm.controls['password'].value,
      attributes: {
        name: this.signUpForm.controls['name'].value
      }
    });

    signUp.then((response) => {
      console.log(response);
      alert('User Created, Please Sign in');
      this.clear();
    }).catch((e) => {
      alert(e.message);
    });
  }

  public clear() {
    this.signUpForm.patchValue({
      password: '',
      email: '',
      name: ''
    });

    this.signUpForm.markAsPristine();
  }

}
