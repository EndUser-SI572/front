import {Component, Input, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {RouterOutlet} from "@angular/router";
import {SignInComponent} from "../pages/login/sign-in/sign-in.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent  implements OnInit{

  constructor() {}

  ngOnInit(): void {
    // ...
  }
}
