import {createReducer, on} from "@ngrx/store";
import {addProduct, removeProduct} from "./cart.action";


//this is the data structure of CartState, can be seperated in to another file: state.ts
export interface CartState {
  count: number,
  like: boolean
}

//initialise the data from 0 and false
export const initialCartState: CartState = {
  count: 0, 
  like: false
}


// the on function, it takes arguments -> on(action, statement)
export const cartReducer = createReducer(
  initialCartState,
  on(addProduct, state=>({...state, count: state.count +1})),
  on(removeProduct, state=>({...state, count: state.count -1})),


);
