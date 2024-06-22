import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../../../services/UserService";
import { Router} from "@angular/router";
import {AirData} from "../../../domain/models/apiResponse/AirData";
import {SoilData} from "../../../domain/models/apiResponse/SoilData";
import {WebSocketService} from "../../../../services/WebSocketService";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  airData!: AirData;
  soilData!: SoilData;

  constructor(private _userService:UserService,
              private _router:Router,
              private webSocketService: WebSocketService
  ){}

  ngOnInit(): void {
    if(!this._userService.isLoggedIn()){
      this._router.navigate(['/sign-in'])
    }else{


    }

  }



}
