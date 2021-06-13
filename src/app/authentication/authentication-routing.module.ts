import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationFormRouteGuard } from './registration/registration-route-guard.service';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationdetailsComponent } from './registrationdetails/registrationdetails.component';

const routes: Routes = [
  {
    path:'registration',
    children:[
      {
        path:'',component:LoginComponent
      },
      {
        path:'register',component:RegistrationComponent
      },
      {
        path:'registrationDetails',component:RegistrationdetailsComponent, canDeactivate:[RegistrationFormRouteGuard]
      }
    ]// component:RegistrationComponent
  }
  //{
    //path:'registration/login',component:LoginComponent
  //},
  //{
    //path:'registration/registrationDetails', component:RegistrationComponent
  //}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
