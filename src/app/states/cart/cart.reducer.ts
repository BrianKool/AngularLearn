import {createReducer, on} from "@ngrx/store";
import {addProduct, removeProduct} from "./cart.action";
import {state} from "@angular/animations";

export interface CartState {
  count: number,
  like: boolean
}

export const initialCartState: CartState = {
  count: 0, like: false
}


// the on function, it takes arguments -> on(action, statement)
export const cartReducer = createReducer(
  initialCartState,
  on(addProduct, state=>({...state, count: state.count +1})),
  on(removeProduct, state=>({...state, count: state.count -1})),


);
