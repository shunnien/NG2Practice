import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { SearchService } from './app/search.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [SearchService]);
