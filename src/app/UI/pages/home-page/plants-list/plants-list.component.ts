import { Component, OnInit } from '@angular/core';
import { PlantService } from "../../../../../services/PlantService";
import { Plants } from "../../../../domain/models/plants";
import { UserService } from "../../../../../services/UserService";
import { User } from "../../../../domain/models/User";

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.scss']
})

export class PlantsListComponent implements OnInit {

  isModelOpen = false;
  dates?: Plants[]
  plant!: Plants
  user!: User | null
  constructor(private _plantService: PlantService,
              private _userService: UserService) { }

  ngOnInit(): void {

    this.user = this._userService.getUser()
    this.getPlants()

  }

  getPlants() {
    this._plantService.getAll(this.user?.id).subscribe({
      next: (val: any) => {
        this.dates = val;
        console.log(this.dates);
      }
    })
  }

  loadPlant(plant: Plants) {
    this.plant = plant;
    this.openModel();
  }

  deletePlant(id: string) {

  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
  }

  onPlantAddedOrUpdated() {
    this.getPlants();
  }
}
