import {Component, Input, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {RouterOutlet} from "@angular/router";
import {SignInComponent} from "../pages/login/sign-in/sign-in.component";
import {VisibilityService} from "../../infraestructure/common/visibilityService";

@Component({
  selector: 'app-main',
  standalone: true,
    imports: [
        HeaderComponent,
        RouterOutlet,
        SignInComponent
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent  implements OnInit{

  constructor(protected visibilityService: VisibilityService) {}

  ngOnInit(): void {
    // ...
  }
}
