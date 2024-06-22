import { Component, OnInit } from '@angular/core';
import { PlantService } from "../../../../../services/PlantService";
import { Plant } from "../../../../domain/models/Plant";
import { UserService } from "../../../../../services/UserService";
import { User } from "../../../../domain/models/User";
import {WebSocketService} from "../../../../../services/WebSocketService";
import {SensorService} from "../../../../../services/SensorService";
import {AirData} from "../../../../domain/models/apiResponse/AirData";
import {SoilData} from "../../../../domain/models/apiResponse/SoilData";

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})

export class PlantsListComponent implements OnInit {

  isModelOpen = false;
  isLoading = false;
  plant!: Plant;
  plants: Plant[]=[];
  user!: User | null;
  airData!:AirData
  soilDataList:SoilData[]=[]

  constructor(private _plantService: PlantService,
              private _userService: UserService,
              private webSocketService: WebSocketService,
              private _sensorService: SensorService,
              ) { }

  ngOnInit(): void {
    this.user = this._userService.getUser()
    this.getAirData()
    this.getLastAirData()
    this.getLastPlantData()
  }

  getAirData(){
    this._sensorService.getLastAirData().subscribe((response:any)=>{
      this.airData=response[0]
      this.getPlants()
    })
  }


  getPlants() {
    this.isLoading = true;
    this._plantService.getAll(this.user?.id).subscribe({
      next: (val: any) => {
        this.plants = val
        this.isLoading = false
        this.getSoilDataList()
      },
      error: () => {
        this.isLoading = false;
        alert('Error fetching plant data.');
      }
    });
  }


  getLastAirData(){
    this.webSocketService.getAirDataUpdates().subscribe((data) => {
      this.airData = data;
    });
  }
  getLastPlantData(){
    this.webSocketService.getPlantDataUpdates().subscribe((data) => {
      this.plant = data;
      let plantToUpdate = this.plants.find(plant => plant.id === this.plant.id);
      if (plantToUpdate) {
        Object.assign(plantToUpdate, this.plant);
      }
    });
  }

  getSoilDataList(){
    this._sensorService.getLastSoilData().subscribe((response:any)=>{
      this.soilDataList=response
      console.log(this.soilDataList)
      for (let i=0; i<this.plants.length; i++){
        this.plants[i].humidity = this.soilDataList[i].sensorValue
      }
    })
  }

  loadPlant(plant: Plant) {
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
