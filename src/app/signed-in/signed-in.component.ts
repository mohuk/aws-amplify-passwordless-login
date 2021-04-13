import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-signed-in',
  template: `
    <p>
      {{userData}}
    </p>
  `,
  styles: [
  ]
})
export class SignedInComponent implements OnInit {
  userData;
  constructor() { }

  ngOnInit(): void {
    this.boostrap();
  }

  private async boostrap() {
    const session = await Auth.currentSession();
    this.userData = JSON.stringify(session);
  }

}
