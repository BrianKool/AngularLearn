import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from "@angular/router";
import routeConfig from './app/routes';
import {provideState, provideStore} from '@ngrx/store';
import {counterReducer} from "./app/states/counter/counter.reducer";
import {cartReducer} from "./app/states/cart/cart.reducer";

bootstrapApplication(AppComponent, {
  //                                                                                                      the sandy is because there no selector in counter ngrx , so this.store.select(**name**) which the name is what you create when use
  //                                                                                                                                             the cart is what you have to name it when create feature, and register in main.ts       
  //                                                                                         provide state ** need to call in both main.ts and app.config.ts ** not sure the problem which add provideState in app.config.ts is fine but in this case need to add in both files                      
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig), provideStore(), provideState('sandy', counterReducer), provideState('cart', cartReducer)],
}).catch((err) => console.error(err));
