import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Mod5Component } from './mod5.component';



@NgModule({
  declarations: [Component1Component, Component2Component, Component3Component, Component4Component, Mod5Component],
  imports: [
    CommonModule
  ],
  exports: [Mod5Component]
})
export class Mod5Module { }
