import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/UserService";
import { Router} from "@angular/router";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  constructor(private _userService:UserService,
              private _router:Router){}

  ngOnInit(): void {
    if(!this._userService.isLoggedIn()){
      this._router.navigate(['/sign-in'])
    }
  }


}
