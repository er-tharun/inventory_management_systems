import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-registrationdetails',
  templateUrl: './registrationdetails.component.html',
  styleUrls: ['./registrationdetails.component.css']
})
export class RegistrationdetailsComponent implements OnInit {

  constructor(private _userService:AuthService) { }
  users:User[] = []
  ngOnInit(): void {
    this._userService.getRegisterUserData().subscribe(
      (data:User[]) => this.users = data
    )
  }

}
