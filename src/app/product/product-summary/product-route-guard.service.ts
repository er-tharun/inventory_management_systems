import { Route } from "@angular/compiler/src/core";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/authentication/auth.service";

@Injectable()
export class ProductRouteGuard implements CanActivate {
    constructor(private _authService:AuthService, private _route:Router) {

    }
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        if(this._authService.isLoggedIn())
            return true
        else
        {
            window.alert('You need to log-in to use this feature')
            //if(sel)
            //{
                //console.log("inside if")
                //this._route.navigate['./registration']
            //}
            return false
        }
            
    }
}