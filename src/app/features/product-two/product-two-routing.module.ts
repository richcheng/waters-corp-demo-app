import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductTwoComponent } from './product-two.component';

const routes: Routes = [{ path: '', component: ProductTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTwoRoutingModule { }
