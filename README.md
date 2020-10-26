# WatersCorpDemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.5.

ng new waters-corp-demo-app --routing --style scss
ng add @angular/material
    Deep Purple/Amber  [ Preview: https://material.angular.io?theme=deeppurple-amber ]
    Set up global Angular Material typography styles: y
    Set up browser animations for Angular Material:y

ng g m core/core
ng g m shared/shared

--generate material navigation
ng generate @angular/material:material-nav --name=/shared/components/nav

ng g c shared/components/layout/footer
ng g c shared/components/layout/header
ng g c shared/components/not-found-page

--shared product-component
ng g c shared/components/product
  @Input() productName: string; // STARTER, REGULAR, PROFESSIONAL, ULTIMATE
  @Input() productPrice: number; // $1,$25, $75, $115
  @Input() productBackgroundColor: string; // grey, blue, purple, red

--lazy loading product-one module/component
ng generate module features/product-one --route product-one --module app.module
ng g m features/product-two --route product-two -m app.module


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
