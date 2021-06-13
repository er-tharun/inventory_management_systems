import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductFormComponent } from './addproduct-form/addproduct-form.component';
import { AddProductRouteGuard } from './addproduct-form/app-product-guard.service';
import { ProductChartsComponent } from './product-charts/product-charts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRouteGuard } from './product-summary/product-route-guard.service';
import { ProductSummaryComponent } from './product-summary/product-summary.component';

const routes: Routes = [
  {
    path:'productSummary', 
    children : [
      {
        path:'',component:ProductSummaryComponent
      },
      {
        path:'charts',component:ProductChartsComponent, canActivate:[ProductRouteGuard]
      },
      {
        path:'addProductForm', component:AddproductFormComponent, canActivate:[ProductRouteGuard], canDeactivate:[AddProductRouteGuard]
      }
    ]
  },
  {
    path:'productDetail/:id', component:ProductDetailComponent, canActivate:[ProductRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
