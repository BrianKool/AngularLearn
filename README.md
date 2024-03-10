# Biba

## NGRX learning note

The NGRX has several key components: action(createAction) -> reducer(createReducer) -->
-> store(create data structure item{state}, initialize before use) -->
->selector(createFeatureSelector {every data structure has to slice in a feature} & createSelector use the feature to slice down into selector) -> Component view(register the Store, then ('this.store.select(**selector** or **created selector name when no selector_file**)')) 

reference link: https://blog.csdn.net/houn27/article/details/135315439?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171007336016800213020764%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=171007336016800213020764&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-135315439-null-null.142^v99^pc_search_result_base7&utm_term=ngrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
