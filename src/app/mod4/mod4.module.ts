import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Mod4Component } from './mod4.component';
import { Mod5Module } from '../mod5/mod5.module';



@NgModule({
  declarations: [Component1Component, Component2Component, Mod4Component],
  imports: [
    CommonModule,
    Mod5Module
  ],
  exports: [Mod4Component]
})
export class Mod4Module { }
