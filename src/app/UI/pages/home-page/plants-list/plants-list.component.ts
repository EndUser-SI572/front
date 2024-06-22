import { Component, OnInit } from '@angular/core';
import { PlantService } from "../../../../../services/PlantService";
import { Plants } from "../../../../domain/models/plants";
import { UserService } from "../../../../../services/UserService";
import { User } from "../../../../domain/models/User";
import {WebSocketService} from "../../../../../services/WebSocketService";
import {SensorService} from "../../../../../services/SensorService";
import {SoilData} from "../../../../domain/models/apiResponse/SoilData";
import {AirData} from "../../../../domain/models/apiResponse/AirData";

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})

export class PlantsListComponent implements OnInit {

  isModelOpen = false;
  isLoading = false;
  plants: Plants[]=[];
  plant!: Plants;
  user!: User | null;
  soilDataList:SoilData[]=[]
  soilData!: SoilData
  airData!:AirData

  constructor(private _plantService: PlantService,
              private _userService: UserService,
              private webSocketService: WebSocketService,
              private _sensorService: SensorService,
              ) { }

  ngOnInit(): void {
    this.user = this._userService.getUser()
    this.getAirData()
    this.getLastSoilData()
    this.getLastAirData()

  }

  getPlants() {
    this.isLoading = true;
    this._plantService.getAll(this.user?.id).subscribe({
      next: (val: any) => {
        this.plants = val
        this.getSoilDataList()
        this.isLoading = false
      },
      error: () => {
        this.isLoading = false;
        alert('Error fetching plant data.');
      }
    });
  }

  getSoilDataList(){
    this._sensorService.getLastSoilData().subscribe((response:any)=>{
      this.soilDataList=response

      for (let i=0; i<6 || i<this.plants.length; i++){
        this.plants[i].humidity = this.soilDataList[i].sensorValue
        this.plants[i].temperature = this.airData.temperatureValue
      }

      console.log(this.soilDataList)
    })
  }
  getAirData(){
    this._sensorService.getLastAirData().subscribe((response:any)=>{
      this.airData=response[0]
      this.getPlants()
    })
  }

  getLastSoilData(){
    this.webSocketService.getSoilDataUpdates().subscribe((data) => {
      this.soilData = data;

      const index = this.soilDataList.findIndex(item => item.sensorName === this.soilData.sensorName);
      this.soilDataList[index] = data
      this.plants[index].humidity = this.soilDataList[index].sensorValue

    });
  }
  getLastAirData(){
    this.webSocketService.getAirDataUpdates().subscribe((data) => {
      this.airData = data;
      for (let i=0; i<6 || i<this.plants.length; i++){
        this.plants[i].temperature = this.airData.temperatureValue
      }
    });
  }


  loadPlant(plant: Plants) {
    this.plant = plant;
    this.changeModel();
  }

  deletePlant(id: string) {
    this._plantService.delete(id).subscribe(()=>{
      alert("Deleted")
      this.getPlants()
    })
  }

  changeModel() {
    this.isModelOpen = !this.isModelOpen;
  }

  onPlantAddedOrUpdated() {
    this.getPlants();
  }
}
