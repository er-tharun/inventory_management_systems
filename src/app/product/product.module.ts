import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { AddproductFormComponent } from './addproduct-form/addproduct-form.component';
import { ProductsService } from './products.service';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductChartsComponent } from './product-charts/product-charts.component';
import { ChartsModule } from 'ng2-charts'
import { productsFilter } from './products-filter.pipe';
import { AddProductRouteGuard } from './addproduct-form/app-product-guard.service';
import { ProductRouteGuard } from './product-summary/product-route-guard.service';


@NgModule({
  declarations: [ProductSummaryComponent, AddproductFormComponent, ProductDetailComponent, ProductChartsComponent,
  productsFilter],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    ChartsModule
  ],
  providers: [
    ProductsService, AddProductRouteGuard, ProductRouteGuard
  ]
})
export class ProductModule { }
