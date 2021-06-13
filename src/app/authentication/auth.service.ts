import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable()

export class AuthService {

    constructor(private http:HttpClient) {

    }

     httpUrl:string = "http://localhost:3000/users";

     httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })
     };

     postRegisterUserData(registeredUserData) {
         return this.http.post(this.httpUrl, registeredUserData, this.httpOptions)
     }

     getRegisterUserData() {
         return this.http.get(this.httpUrl, this.httpOptions)
     }

    isLoggedIn():boolean {
        if(localStorage.getItem("Logged-In") != null)
            return true
        else
            return false
    }
}