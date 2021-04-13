import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-password-less',
  template: `
    <p>
      {{message}}
    </p>
  `,
  styles: [
  ]
})
export class LoginPasswordLessComponent {

  email: string;
  code: string;
  user;
  cognitoUser;
  message = 'Signing In !'

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log('constructor')
    this.bootstrap();
  }

  async bootstrap() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.email = this.activatedRoute.snapshot.paramMap.get('email')
    console.log(this.email, this.code);
    this.signIn();
    
  }

  async signIn() {
    const user = await Auth.signIn(this.email);
    this.cognitoUser = await Auth.sendCustomChallengeAnswer(user, this.code);
    try{
      await Auth.currentSession();
      this.router.navigate(['/signed-in']);
    }catch(e) {
      this.message = e.message;
    }
  }

}
