import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { AddproductFormComponent } from "./addproduct-form.component";

@Injectable()

export class AddProductRouteGuard implements CanDeactivate<AddproductFormComponent> {
    canDeactivate(component:AddproductFormComponent):boolean
    {
        if(component.addForm.dirty && !component.addForm.submitted)
        {
            return confirm("Do you want to leave this page ?")
        }
        return false
    }
}