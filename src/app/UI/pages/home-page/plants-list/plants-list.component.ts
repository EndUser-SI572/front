import {Component, OnInit} from '@angular/core';
import {PlantsUseCases} from "../../../../domain/useCases/plantsUseCases";
import {Observable} from "rxjs";
import {Plants} from "../../../../domain/models/plants";
import {Router, RouterLink} from "@angular/router";
import {DialogFormAddPlant, FormAddPlantComponent} from "../form-add-plant/form-add-plant.component";
import {HumidityComponent} from "../humidity/humidity.component";

@Component({
  selector: 'app-plants-list',
  standalone: true,
  imports: [
    RouterLink,
    FormAddPlantComponent,
    DialogFormAddPlant,
    HumidityComponent
  ],
  templateUrl: './plants-list.component.html',
  styleUrl: './plants-list.component.scss'
})
export class PlantsListComponent implements OnInit{

  constructor(private _plantsUseCase: PlantsUseCases,private router: Router) {}

  response$: Observable<Array<Plants>> | undefined;
  dates?: Plants[];

  ngOnInit(): void {
    this.response$ = this._plantsUseCase.getAllPlants();
    this.response$?.subscribe( (data: Plants[]) =>{
        this.dates = data;
      }
    )
  }

  goToPlantDetail(id: string): void{
    this.router.navigate(['/plant', id]).then(r => r.valueOf() );
  }

}
