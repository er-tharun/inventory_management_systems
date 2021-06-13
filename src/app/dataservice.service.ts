import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  arr:string[] = []
  setUser(data:string) {
    
    this.arr.push(data)
    console.log(this.arr)
  }

  getUser():string {
    console.log(this.arr)
    return this.arr[0]
  }

  removeUser() {
    this.arr.pop()
  }
}
