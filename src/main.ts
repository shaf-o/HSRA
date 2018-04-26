import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LicenseManager } from 'ag-grid-enterprise';

/**
 * Evaluation_License_Valid_Until__16_June_2018__MTUyOTEwMzYwMDAwMA==adbba158d5a9934adfbe7a98950af2a4
*/
LicenseManager.setLicenseKey('Evaluation_License_Valid_Until__16_June_2018__MTUyOTEwMzYwMDAwMA==adbba158d5a9934adfbe7a98950af2a4');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
