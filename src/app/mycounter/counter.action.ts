import { createAction } from '@ngrx/store';
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectCounterState = createFeatureSelector<number>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state) => state
);

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
