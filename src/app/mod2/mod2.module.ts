import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Component } from './mod2.component';
import { Mod3Module } from '../mod3/mod3.module';

@NgModule({
  declarations: [Mod2Component],
  imports: [
    CommonModule,
    Mod3Module,
  ],
  exports: [Mod2Component]
})
export class Mod2Module { }
