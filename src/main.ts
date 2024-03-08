import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from "@angular/router";
import routeConfig from './app/routes';
import {provideState, provideStore} from '@ngrx/store';
import {counterReducer} from "./app/states/counter/counter.reducer";

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig), provideStore(), provideState('count', counterReducer)],
}).catch((err) => console.error(err));
