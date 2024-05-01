import { Component } from '@angular/core';
import {PlantsListComponent} from "./plants-list/plants-list.component";
import {RouterLink} from "@angular/router";
import {TemperatureComponent} from "./temperature/temperature.component";
import {HumidityComponent} from "./humidity/humidity.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    PlantsListComponent,
    RouterLink,
    TemperatureComponent,
    HumidityComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
