import { Component } from '@angular/core';
import {TemperatureComponent} from "../temperature/temperature.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-humidity',
  standalone: true,
  imports: [
    TemperatureComponent,
    RouterLink
  ],
  templateUrl: './humidity.component.html',
  styleUrl: './humidity.component.scss'
})
export class HumidityComponent {

}
