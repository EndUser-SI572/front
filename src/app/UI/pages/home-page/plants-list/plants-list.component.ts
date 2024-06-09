import { Component, OnInit } from '@angular/core';
import { PlantService } from "../../../../../services/PlantService";
import { Plants } from "../../../../domain/models/plants";
import { UserService } from "../../../../../services/UserService";
import { User } from "../../../../domain/models/User";

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})

export class PlantsListComponent implements OnInit {

  isModelOpen = false;
  isLoading = false;
  dates?: Plants[];
  plant!: Plants;
  user!: User | null;

  constructor(private _plantService: PlantService, private _userService: UserService) { }

  ngOnInit(): void {
    this.user = this._userService.getUser();
    this.getPlants();
  }

  getPlants() {
    this.isLoading = true;
    this._plantService.getAll(this.user?.id).subscribe({
      next: (val: any) => {
        this.dates = val;
        console.log(this.dates);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Error fetching plant data.');
      }
    });
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
