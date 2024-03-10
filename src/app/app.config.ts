import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import routeConfig from "./routes";
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideStore, provideState} from "@ngrx/store";
import { counterReducer } from './states/counter/counter.reducer';
import { cartReducer } from './states/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideClientHydration(), provideStore(), provideState('sandy', counterReducer), provideState('cart', cartReducer)]
};
