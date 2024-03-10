import {CartState} from "./cart/cart.reducer";


//this concept is trying to make AppStore a global variable which in clude many different state store in AppStore
export interface AppStore {
  CartState: CartState
}
 