import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../../../../../services/WebSocketService";
import {SensorService} from "../../../../../services/SensorService";
import {AirData} from "../../../../domain/models/apiResponse/AirData";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit{

  airData!: AirData;

  constructor(private webSocketService: WebSocketService,
              private _sensorService: SensorService,) {}

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
