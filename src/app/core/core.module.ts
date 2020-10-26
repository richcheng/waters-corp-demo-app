import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log('Core Module initialised');
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
