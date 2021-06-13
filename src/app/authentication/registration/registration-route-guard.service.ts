import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate } from "@angular/router";
import { RegistrationComponent } from "./registration.component";

@Injectable()

export class RegistrationFormRouteGuard implements CanDeactivate<RegistrationComponent> {

    canDeactivate(component:RegistrationComponent):boolean {
        if(component.addForm.dirty && !component.addForm.submitted)
        {
            return confirm('Are you want to Go away from Registration ?')
        }
        else{
            return false
        }
    }
}