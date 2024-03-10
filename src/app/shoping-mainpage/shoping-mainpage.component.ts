import { Component } from '@angular/core';
import {count, Observable} from "rxjs";
import {Store, select, createSelector} from "@ngrx/store";
import {AsyncPipe, NgForOf} from "@angular/common";
import {addProduct, removeProduct} from "../states/cart/cart.action";
import {CartState} from "../states/cart/cart.reducer";
import {cartCountSelector} from "../states/cart/cart.selector";
import {AppStore} from "../states/app.store";


@Component({
  selector: 'app-shoping-mainpage',
  standalone: true,
  imports: [
    NgForOf, AsyncPipe
  ],
  // templateUrl: './shoping-mainpage.component.html',
  template: `
    <main>
      <p>This is product page</p>
      <section>
        <div style="width: 70%;"><p>haha</p></div>
        <div>
          <img src="../../assets/cart_icon.png" alt="this is a cart logo icon" width="32" height="32" >
          count: {{cartCount$ | async}}
        </div>


        <div>
          <ul>
            <li *ngFor="let product of products">
              ID: {{product.productid}}, Product Name: {{product.productN}}
              <button (click)="addProduct()">I want</button>
              <button (click)="removeProduct()">Remove</button>
          </ul>
        </div>


      </section>
    </main>

  `,
  styleUrl: './shoping-mainpage.component.css'
})


////////////////////////////////////////////////////////////////////////////////////
//This shopping cart component page is misfeatured by adding and delete
//different products 
////////////////////////////////////////////////////////////////////////////////////
export class ShopingMainpageComponent {
  public cartCount$ = this.store.select(cartCountSelector)


  constructor(private store: Store<AppStore>){
  }

  public products =
    [
      {"productid": 1, "productN": "apple"},
      {"productid": 2, "productN": "banana"},
      {"productid": 3, "productN": "guava"},
      {"productid": 4, "productN": "pineapple"},
      {"productid": 5, "productN": "orange"},
      {"productid": 6, "productN": "watermelon"},
      {"productid": 7, "productN": "kiwi"},
      {"productid": 8, "productN": "dragonfruit"},
    ];


  public addProduct() {
    this.store.dispatch(addProduct());
  };

  public removeProduct() {
    this.store.dispatch(removeProduct());
  };

}


