import {Component, OnInit} from '@angular/core';
import {PlantsUseCases} from "../../../../domain/useCases/plantsUseCases";
import {Observable} from "rxjs";
import {Plants} from "../../../../domain/models/plants";
import {Router, RouterLink} from "@angular/router";
import { FormAddPlantComponent} from "../form-add-plant/form-add-plant.component";
import {HumidityComponent} from "../humidity/humidity.component";
import {ToastrService} from "ngx-toastr";
import {ModelComponent} from "../../../model/model.component";

@Component({
  selector: 'app-plants-list',
  standalone: true,
  imports: [
    RouterLink,
    FormAddPlantComponent,
    HumidityComponent,
    ModelComponent
  ],
  templateUrl: './plants-list.component.html',
  styleUrl: './plants-list.component.scss'
})
export class PlantsListComponent implements OnInit{

  constructor(private _plantsUseCase: PlantsUseCases,private router: Router, private toastr:ToastrService) {}

  isModelOpen = false;
  response$: Observable<Array<Plants>> | undefined;
  dates?: Plants[];
  plant!: Plants;


  ngOnInit(): void {
    this.getAllPlants();
  }

  getAllPlants(){
    this.response$ = this._plantsUseCase.getAllPlants();
    this.response$?.subscribe( (data: Plants[]) =>{
        this.dates = data;
      }
    )
  }

  loadPlant(plant: Plants){
    this.plant = plant;
    this.openModel();
  }

  deletePlant(id: string){
    this._plantsUseCase.deletePlant(id).subscribe({
      next: (response)=>{
        this.toastr.success("Plant Delete success");
        this.getAllPlants();
      }
    })
  }

  openModel(){
    this.isModelOpen = true;
  }

  closeModel(){
    this.isModelOpen = false;
    this.getAllPlants();
  }

  // Not is necessary use this function
  goToPlantDetail(id: string): void{
    this.router.navigate(['/plant', id]).then(r => r.valueOf() );
  }

}
