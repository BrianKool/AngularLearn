import { Component } from '@angular/core';
import {increment, decrement, reset, selectCount} from "./counter.action";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";



@Component({
  selector: 'app-mycounter',
  standalone: true,
  imports: [],
  // templateUrl: './mycounter.component.html',
  template:
    `
        <main>
          Count: {{ count$ | async }}

          <button (click)="increment()">Increment</button>
          <button (click)="decrement()">Decrement</button>
          <button (click)="reset()">Reset</button>

        </main>

    `,
  styleUrl: './mycounter.component.css'
})

export class MycounterComponent {
  public count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select(selectCount));
  }

  public increment() {
    this.store.dispatch(increment());
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }
}


