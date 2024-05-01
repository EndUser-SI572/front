import {Component, OnInit} from '@angular/core';
import {SignInComponent} from "../pages/login/sign-in/sign-in.component";
import { initFlowbite } from 'flowbite';
import {RouterLink, RouterLinkActive} from "@angular/router";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SignInComponent,
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
}
