import { ApplicationConfig } from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {PlantsGateway} from "../domain/gateway/plantsGateway";
import {PlantsApiService} from "../infraestructure/driven-adapter/plants-api/plants-api.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    { provide: PlantsGateway, useClass: PlantsApiService}, provideAnimationsAsync()
  ]
};
