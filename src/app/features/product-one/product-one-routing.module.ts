import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductOneComponent } from './product-one.component';

const routes: Routes = [{ path: '', component: ProductOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductOneRoutingModule { }
