import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <input type="button" (click)="logout()" value="Logout">
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

  constructor(
    private router: Router
  ){}

  public async logout() {
    await Auth.signOut();
    this.router.navigate(['/login']);
  }
}
