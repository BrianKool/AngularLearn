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

  //the "sandy" is what i put a random word to figure out the connection
  //you have to change the name in main.ts -> provideState(name, *reducername*)
  constructor(private store: Store<{ sandy: number}>) {
    this.count$ = store.select('sandy');
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


