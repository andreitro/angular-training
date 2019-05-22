import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const MODULES =  [
  CommonModule,
  RouterModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES
})
export class SharedModule { }
