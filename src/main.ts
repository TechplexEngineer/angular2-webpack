// Imports for loading & configuring the in-memory web api
import { XHRBackend, HTTP_PROVIDERS } from '@angular/http';
import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { appRouterProviders } from './app/app.routes';

bootstrap(AppComponent, [
	appRouterProviders,
	HTTP_PROVIDERS
]);
