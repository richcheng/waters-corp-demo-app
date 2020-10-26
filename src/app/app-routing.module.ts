import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren: () => import('./features/about-me/about-me.module').then(m => m.AboutMeModule)},
  { path: 'buy1', loadChildren: () => import('./features/product-one/product-one.module').then(m => m.ProductOneModule)},
  { path: 'buy2', loadChildren: () => import('./features/product-two/product-two.module').then(m => m.ProductTwoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
