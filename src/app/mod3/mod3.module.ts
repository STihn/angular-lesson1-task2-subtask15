import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Mod3Component } from './mod3.component';
import { Mod4Module } from '../mod4/mod4.module';



@NgModule({
  declarations: [Component1Component, Mod3Component],
  imports: [
    CommonModule,
    Mod4Module,
  ],
  exports: [Mod3Component, Component1Component]
})
export class Mod3Module { }
