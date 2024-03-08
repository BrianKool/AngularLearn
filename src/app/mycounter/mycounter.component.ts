import { Component } from '@angular/core';
import {increment, decrement, reset} from "../states/counter/counter.actions";
import {Store, select} from "@ngrx/store";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";


@Component({
  selector: 'app-mycounter',
  standalone: true,
  imports: [AsyncPipe ],
  // templateUrl: './mycounter.component.html',
  template:
    `
          Count: {{ count$ | async }}
          <p></p>

          <button (click)="increment()">Increment</button>
          <button (click)="decrement()">Decrement</button>
          <button (click)="reset()">Reset</button>


    `,
  styleUrl: './mycounter.component.css'
})

export class MycounterComponent {
  public count$: Observable<number>;

  constructor(private store: Store<{ count: number}>) {
    this.count$ = store.select('count');
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


