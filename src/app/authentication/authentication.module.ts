import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationdetailsComponent } from './registrationdetails/registrationdetails.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { User } from './user';
import { RegistrationFormRouteGuard } from './registration/registration-route-guard.service';
import { DataserviceService } from '../dataservice.service';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    RegistrationdetailsComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    RegistrationFormRouteGuard,
    DataserviceService
  ]
})
export class AuthenticationModule { }
