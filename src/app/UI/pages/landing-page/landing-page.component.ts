import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {VisibilityService} from "../../../infraestructure/common/visibilityService";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private visibilityService: VisibilityService) {}

  toggleVisibility() {
    this.visibilityService.toggleVisibility();
  }

}
