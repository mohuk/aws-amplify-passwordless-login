import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Auth } from 'aws-amplify';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

Auth.configure({
  Auth: {
    region: environment.region,
    userPoolId: environment.userPoolId,
    userPoolWebClientId: environment.userPoolWebClientId,
  }
});
