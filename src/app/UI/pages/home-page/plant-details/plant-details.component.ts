import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Plants} from "../../../../domain/models/plants";
import {PlantsUseCases} from "../../../../domain/useCases/plantsUseCases";
import {ActivatedRoute} from "@angular/router";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-plant-details',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './plant-details.component.html',
  styleUrl: './plant-details.component.scss'
})
export class PlantDetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute,private _plantsUseCases: PlantsUseCases) {
  }

  response$: Observable<Plants> | undefined;
  dates?: Plants;

  ngOnInit(): void {
    const id: string| null = this.route.snapshot.paramMap.get('id');
    this.response$ = this._plantsUseCases.getPlantsById(id);

    this.response$.subscribe(
      (data: Plants)=>{
        this.dates = data;
      }
    )
  }

}
