import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/UserService';
import { User } from "../../domain/models/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User = new User();
  loggedIn: boolean = false;

  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserData();

    this._userService.userUpdated.subscribe((user: User) => {
      this.user = user;
      this.loggedIn = this.isLoged();
    });
  }

  loadUserData(): void {
    const user = this._userService.getUser();
    if (user) {
      this.user = user;
      this.loggedIn = this.isLoged();
    }
  }

  isLoged(): boolean {
    return this._userService.isLoggedIn();
  }

  logOut() {
    this._userService.logout();
    this.router.navigate(['/sign-in']);
    this.loggedIn = false;
  }

}
