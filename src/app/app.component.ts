import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstone-project';

 isUserLogged:boolean = false
  constructor(private _router:Router, private _dataService:DataserviceService)
  {

  }

  val:string = null

  updateNavBar()
  {
    this.val = localStorage.getItem("Logged-In")
  }
  
  ngOnInit()
  {
    this.updateNavBar()
    //if(localStorage.getItem("Logged-In"))
    //{
      //this.val = localStorage.getItem("Logged-In")
      //this.isUserLogged = true
      //this.val = this._dataService.getUser();
    //}
    
  }

  changeToLoginRoute() {
    alert("You Have been logout successfully")
    this.val = null
    //this.isUserLogged = false
    localStorage.removeItem("Logged-In")
    this._router.navigate(['']);
  }

    //val = this._dataService.getUser();
    //console.log(this.val)
    //if(val != null)
    //{
      //this.isUserLogged = true
    //}
  
}
