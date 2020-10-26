import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// shared components
import {
  NavComponent,
  FooterComponent,
  HomeComponent,
  NotFoundPageComponent,
  ProductComponent,
} from './components';

// shared enums
// import { ProductType } from './enums/product-type.enum';
// The Angular Material module must be imported after Angular's BrowserModule in the app.module.ts, as the import order matters]
import { MaterialModule } from '../material/material.module';

export const COMPONENTS = [
  NavComponent,
  FooterComponent,
  HomeComponent,
  NotFoundPageComponent,
  ProductComponent,
];
export const MODULES = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  MaterialModule
];

@NgModule({
  imports: MODULES,
  declarations: COMPONENTS,
  exports: [...MODULES, ...COMPONENTS],

})
export class SharedModule {}
