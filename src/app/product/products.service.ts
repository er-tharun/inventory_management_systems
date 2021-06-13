import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable()

export class ProductsService {
    
    constructor(private _httpClient:HttpClient) {

    }

    httpUrl:string = "http://localhost:3000/products"

    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type' : 'Application/json'
            }
        )
    }

    postData(data:Product) {
        return this._httpClient.post(this.httpUrl, data, this.httpOptions)
    }

    getData() {
        return this._httpClient.get(this.httpUrl, this.httpOptions)
    }

    getDataById(id:string) {
        let getByIdUrl = `${this.httpUrl}/${id}`
        console.log(getByIdUrl)
        return this._httpClient.get(getByIdUrl, this.httpOptions)
    }

    updateData(data:Product, id:string) {
        let updateUrl = `${this.httpUrl}/${id}`
        console.log(updateUrl)
        return this._httpClient.put(updateUrl, data, this.httpOptions)
    }

    deleteData(id:string) {
        let deleteUrl = `${this.httpUrl}/${id}`
        console.log(deleteUrl)
        return this._httpClient.delete(deleteUrl, this.httpOptions)
    }
}