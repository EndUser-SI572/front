import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../../../../services/UserService";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  constructor(private _userService: UserService,
              private router: Router) {}

  onSubmit() {
    const loginData = {
      username: this.email,
      password: this.password
    };
    this._userService.login(loginData);
  }
}
