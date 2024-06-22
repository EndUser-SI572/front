import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RouterLink } from "@angular/router";
import {SoilData} from "../../../../domain/models/apiResponse/SoilData";
import {AirData} from "../../../../domain/models/apiResponse/AirData";
import {SensorService} from "../../../../../services/SensorService";
import {WebSocketService} from "../../../../../services/WebSocketService";

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit{

  airData!: AirData;

  constructor(private _sensorService: SensorService,
              private webSocketService: WebSocketService) {}


  ngOnInit() {
    this.getAirData()
    this.getLastAirData()
  }

  getAirData(){
    this._sensorService.getLastAirData().subscribe((response:any)=>{
      this.airData=response[0]
    })
  }

  getLastAirData(){
    this.webSocketService.getAirDataUpdates().subscribe((data) => {
      this.airData = data;
    });
  }
}
