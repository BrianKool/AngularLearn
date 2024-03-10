// import {AppStore} from "../app.store";
import {createSelector, createFeatureSelector} from "@ngrx/store";
import { CartState } from "./cart.reducer";


export const selectCartState = createFeatureSelector<CartState>('cart');



export const cartCountSelector = createSelector(
  selectCartState,
  (state) => state.count
)
