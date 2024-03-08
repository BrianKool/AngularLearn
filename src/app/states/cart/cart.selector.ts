import {AppStore} from "../app.store";
import {createSelector} from "@ngrx/store";


export const selectCartCount = (state: AppStore) => state.counter;

export const cartCountSelector = createSelector(
  selectCartCount,
  (state) => state.count
)
