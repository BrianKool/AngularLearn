import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-formbuild-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet
  ],
  // templateUrl: './formbuild-page.component.html',
  template: `
    <main>
      <section>
        <p>This is formbuilder and it work</p>
        <form [formGroup]="housingLocationForm" (ngSubmit)="onSubmit()">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" formControlName="name">

          <label for="city">City</label>
          <input type="text" id="city" name="city" formControlName="city">



          <div formGroupName="amenity">
            <h2>wifi</h2>
            <label class="switch">
              <input type="checkbox" formControlName="wifi">
              <span class="slider round"></span>
            </label>

            <h2>laundry</h2>
            <label class="switch">
              <input type="checkbox" formControlName="laundry">
              <span class="slider round"></span>
            </label>

          </div>
          <input type="submit">
        </form>
      </section>
    </main>
  `,
  styleUrl: './formbuild-page.component.css'
})
export class FormbuildPageComponent {

  housingLocationForm = this.formBuilder.group({
    name: [''],
    city: [''],
    amenity: this.formBuilder.group({
      wifi: false,
      laundry: false,
    })
    // state: [''],
    // photo: [''],
    // availableUnits: [''],
  })

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(){
    let housingproperty = this.housingLocationForm.value;

    console.log("House name: " ,housingproperty.name, " House located city: " , housingproperty.city, " Wifi available: " , housingproperty.amenity?.wifi, " Has Laundry: " ,housingproperty.amenity?.laundry);
    // this.housingLocationForm.reset();
  }


}
