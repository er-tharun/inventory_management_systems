import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DataserviceService } from 'src/app/dataservice.service';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router, private _route:ActivatedRoute, private _authService:AuthService, private _dataService:DataserviceService, private _appcomp:AppComponent) { }
  loginFailed:boolean
  loginSucceed:boolean
  ngOnInit(): void {
  }

  emailId:string = ''
  password:string = ''
  onSubmit(formData:NgForm) {
    if(formData.valid) {
      let userEmail = formData.value.emailId
      let passWord = formData.value.passWord

      this._authService.getRegisterUserData().subscribe(
        (data:User[]) => {
            var matches:boolean = false
            data.forEach(
                (itr) => {
                    if(userEmail === itr.email && passWord === itr.password)
                    {
                        localStorage.setItem('Logged-In',userEmail)
                        matches = true
                        this._appcomp.updateNavBar()
                    }
                }
            )
            if(matches == false)
            {
              this.loginFailed = true
              this.loginSucceed = false
            }
            else
            {
              this.loginFailed = false
              this.loginSucceed = true
              window.alert("Login Successful")
              this._router.navigate([''])
            }
            
        }
    )
    }
  }

  sendDataToParent()
  {
    //@Output() newItemEvent = new EventEmitter<string>();
    
  }

  goBack() {
    this._router.navigate(['./registration'])
  }

  logOut() : void {
    if(localStorage.getItem("Logged-In"))
    {
      localStorage.removeItem("Logged-In")
      this._dataService.removeUser()
    }
  }
}
