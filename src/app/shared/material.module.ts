import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdButtonModule,
  MdInputModule,
} from '@angular/material';

const materialModules = [
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdButtonModule,
  MdInputModule,
];

@NgModule({
  imports: [ ...materialModules ],
  exports: [ ...materialModules ],
})
export class MaterialModule { }
