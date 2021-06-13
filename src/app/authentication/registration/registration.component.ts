import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../user';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  id:string=""
  registrationSuccessMessage:string = null
  constructor(private _authService:AuthService) { }
  userData = new User(this.id = uuidv4(), "", "", "", "", "", null)

  @ViewChild('addUserForm', {static:false}) addForm:NgForm
  
  ngOnInit(): void {
    
  }
  addUser(formData:NgForm)
  {
    if(formData.valid) {
      this._authService.postRegisterUserData(formData.value).subscribe()
      formData.reset()
      this.registrationSuccessMessage = "Registration Successful";
    }
  }

}
