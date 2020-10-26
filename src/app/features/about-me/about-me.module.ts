import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    SharedModule, AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
