import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent, RouterOutlet],
  styleUrl: './app.component.css',
  //the bellowing is direct me to tutorial
  // templateUrl: './app.component.html',
  template: `
    <main>
      <a [routerLink]= "['/']">
        <header class="brand-name">
          <img class="brand-logo" src="../assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'biba';
  test : string = 'hello world';
}
