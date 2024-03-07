import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";
import {FormbuildPageComponent} from "./formbuild-page/formbuild-page.component";
import {MycounterComponent} from "./mycounter/mycounter.component";

const routeConfig : Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
    pathMatch: 'full',
  },
  {
    path:'form-builder',
    component: FormbuildPageComponent,
    title: 'Leaning of form-builder',
    pathMatch: 'full',
  },
  {
    path:'details/:id',
    component: DetailsComponent,
    title: 'Home details',
    pathMatch: 'full',
  },
  {
    path: 'NGRX',
    component: MycounterComponent,
    title: 'My counter',
  },
];

export default routeConfig;
