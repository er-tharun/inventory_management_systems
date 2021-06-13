import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route:Router, private _activatedRoute:ActivatedRoute, private _productService:ProductsService) { }
  id:any = null

    productName:string = ""
    productDescription:string = ""
    manufacturer:string = ""
    price:number
    quantity:number
    visit:number

  ngOnInit(): void {
    this._activatedRoute.params.forEach( 
      (param) => this.id = param.id
    )
    
    this._productService.getDataById(this.id).subscribe(
      (data:Product) => {
        this.productName = data.productName
        this.productDescription = data.productDescription
        this.manufacturer = data.manufacturer
        this.price = data.price
        this.quantity = data.quantity
        this.visit = data.visit
        this.incrementVisit(data)
      }
    )

  }

  incrementVisit(pdtData:Product) {
    pdtData.visit++
    this._productService.updateData(pdtData, pdtData.id).subscribe()
  }

  goBack() {
    this._route.navigate(['./productSummary'])
  }

}
