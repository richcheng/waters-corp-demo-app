import { NgModule } from '@angular/core';
import { ProductOneRoutingModule } from './product-one-routing.module';
import { ProductOneComponent } from './product-one.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductOneComponent],
  imports: [
    SharedModule,
    ProductOneRoutingModule,
  ],
})
export class ProductOneModule { }
