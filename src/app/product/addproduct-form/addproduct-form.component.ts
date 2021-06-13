import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Product } from '../product';
import { v4 as uuidv4 } from 'uuid';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addproduct-form',
  templateUrl: './addproduct-form.component.html',
  styleUrls: ['./addproduct-form.component.css']
})
export class AddproductFormComponent implements OnInit {
  productData:Product = null;
  constructor(private _productService:ProductsService, private _route:Router) { }
  
  //initialData:Product = new Product(this.id = uuidv4(),"","","",null,null,0);

  id:string; productName:string; productDescription:string; manufacturer:string; 
  price:number; quantity:number; visit:string

  isUpdate:boolean = false

  addOrUpdateProductSuccessful:boolean = false

  @ViewChild('addProductForm', {static: false}) addForm:NgForm

  defaultIndex:number = 0

  ngOnInit(): void {
    if(window.history.state[this.defaultIndex] != null) 
    {
      this.setFormData(window.history.state[this.defaultIndex])
      this.isUpdate = true
      this.id = window.history.state[this.defaultIndex].id
      this.productName = window.history.state[this.defaultIndex].productName
      this.productDescription = window.history.state[this.defaultIndex].productDescription
      this.manufacturer = window.history.state[this.defaultIndex].manufacturer
      this.quantity = window.history.state[this.defaultIndex].quantity
      this.price = window.history.state[this.defaultIndex].price
      this.visit = window.history.state[this.defaultIndex].visit
    }
    //else 
    //{
      //this.setFormData(this.initialData)
    //}
  }

  onSubmit(data:NgForm) {
    if(data.valid){
      if(this.isUpdate)
      {
        let dataToService:Product = {
          "id" : this.id,
          "productName" : this.productName,
          "productDescription" : this.productDescription,
          "manufacturer" : this.manufacturer,
          "price" : this.price,
          "quantity" : this.quantity,
          "visit" : 0
        }
        if(dataToService.id!=null && dataToService.productName!=null&&
          dataToService.productDescription!=null && dataToService.manufacturer!=null&&
          dataToService.quantity!=null && dataToService.price!=null && dataToService!=null)
          {
            this._productService.updateData(dataToService, this.id).subscribe()
            this.addOrUpdateProductSuccessful = true
            alert('Add/Update Product Success')
            this._route.navigate['./productSummary']
          }
        
      }
      else
      {
        let dataToService:Product = {
          "id" : uuidv4(),
          "productName" : this.productName,
          "productDescription" : this.productDescription,
          "manufacturer" : this.manufacturer,
          "price" : this.price,
          "quantity" : this.quantity,
          "visit" : 0
        }
        if(dataToService.id!=null && dataToService.productName!=null&&
          dataToService.productDescription!=null && dataToService.manufacturer!=null&&
          dataToService.quantity!=null && dataToService.price!=null && dataToService!=null)
          {
            this._productService.postData(dataToService).subscribe()
            //data.reset()
            this.addOrUpdateProductSuccessful = true
            alert('Add/Update Product Success')
            this._route.navigate['']
          }
      }
      //this.addOrUpdateProductSuccessful = true
    }
  }

  setFormData(data) {
    console.log(data)
    
    this.productData = data
  }

  goBack() {
    this._route.navigate(['./productSummary'])
  }

}
