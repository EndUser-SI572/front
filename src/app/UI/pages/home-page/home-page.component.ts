import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TemperatureComponent } from "./temperature/temperature.component";
import { HumidityComponent } from "./humidity/humidity.component";
import {PlantsListComponent} from "./plants-list/plants-list.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent { }
