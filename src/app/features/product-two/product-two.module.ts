import { NgModule } from '@angular/core';
import { ProductTwoComponent } from './product-two.component';
import { ProductTwoRoutingModule } from './product-two-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductTwoComponent
  ],
  imports: [
    SharedModule,
    ProductTwoRoutingModule,
  ]
})
export class ProductTwoModule { }
