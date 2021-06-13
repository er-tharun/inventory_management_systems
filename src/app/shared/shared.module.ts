import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from '../authentication/authentication.module';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],

  exports: [
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
