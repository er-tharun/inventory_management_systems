import { Component, OnInit, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { AddproductFormComponent } from '../addproduct-form/addproduct-form.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {

  constructor(private _productService:ProductsService, private _route:Router) { }

  products:Product[] = null

  checkedList:string[] = []

  isSelected:boolean = false

  isDeleteErrorMessage:boolean = false

  isEditErrorMessage:boolean = false

  Filter:string = ''

  chkName:boolean = true //= document.getElementById("chkname").nodeValue;
    //console.log(document.querySelector('#chkName:checked')!==null)
  chkdescription:boolean = true //= document.getElementById("chkdescription")
  chkmanufacturer:boolean = true //= document.getElementById("chkmanufacturer")
  chkprice:boolean = true //= document.getElementById("chkprice")
  chkquantity:boolean = true //= document.getElementById("chkquantity")
    //console.log(chkName+"---"+chkdescription)
  ngOnInit(): void {
    this.getProductData()
  }
  changechkName()
  {
    this.chkName=!this.chkName
  }
  changechkdescription()
  {
    this.chkdescription = !this.chkdescription
  }
  changechkmanufacturer()
  {
    this.chkmanufacturer = !this.chkmanufacturer
  }
  changechkprice()
  {
    this.chkprice = !this.chkprice
  }
  changechkquantity()
  {
    this.chkquantity = !this.chkquantity
  }

  changeSelectedList(id:string) {
    if(this.isDeleteErrorMessage == true)
    {
      this.isDeleteErrorMessage = false
      this.isEditErrorMessage = false
    }
    if(!this.checkedList.includes(id))
    {
      this.checkedList.push(id)
    }
    else
    {
      this.checkedList = this.checkedList.filter(item => item!=id)
    }
  }

  getCheckedDataOnly(data:Product[]) {
    let tempData:Product[] = []
      this.checkedList.forEach(element => {
        data.forEach(pdtData => {
          if(pdtData.id == element)
          {
            tempData.push(pdtData)
          }
        });
      });

      return tempData
  }

  getProductData() {
    this._productService.getData().subscribe(
      (data:Product[]) => {
        this.products = data
      }
    )
  }

  addProductData() {
    this._route.navigate(['./productSummary/addProductForm'])
  }

  editProductData(data:Product[]) {
    let tempData:Product[] = this.getCheckedDataOnly(data)
    if(localStorage.getItem("Logged-In") != null)
    {
    if(tempData.length == 1)
    {
      //console.log(tempData)
      this._route.navigate(['./productSummary/addProductForm'], {state:tempData})
    }
    else if(tempData.length == 0 || tempData.length > 1)
    {
      this.isEditErrorMessage = true
    }
  }
  else{
    alert('you need to log-in to use this feature.')
  }
  }

  deleteProductData(data:Product[]) {

    if(localStorage.getItem("Logged-In") != null)
    {
      let tempData:Product[] = this.getCheckedDataOnly(data)

      if(tempData.length == 0)
      {
        this.isDeleteErrorMessage = true
        console.log(this.isDeleteErrorMessage)
      }
      else 
      {
        let sel:boolean = window.confirm('Are u sure you want to delete the seleted Items ?')
        if(sel)
        {
          console.log(tempData)
          tempData.forEach( (tempData:Product) => {
            this._productService.deleteData(tempData.id).subscribe(
              )
              this.getProductData()
          });
        }
      }
    }
    else
    {
      alert('You need to login to use this feature.')
    }
  }

  linkToMostVisitedProducts() {
    this._route.navigate(['./productSummary/charts'])
  }

}
