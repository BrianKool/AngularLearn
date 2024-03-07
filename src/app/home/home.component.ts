import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {HousingService} from "../housing.service";
import {Housinglocation} from "../housinglocation";
import {RouterModule} from "@angular/router";
import {FormbuildPageComponent} from "../formbuild-page/formbuild-page.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterModule,FormbuildPageComponent],
  templateUrl: './home.component.html',
  // template: `
  //   <main>
  //     <p>{{item}}</p>
  //   </main>
  // `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  item : string = "home component work by using template";
  itemurl : string = "home component work by using template url";

  filteredLocationList: Housinglocation[] = [];
  protected housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor(){
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[])=> {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(city: string){
    if (!city){
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(city.toLowerCase())
    )
  }

}


