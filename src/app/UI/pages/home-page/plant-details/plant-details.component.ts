import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Plants} from "../../../../domain/models/plants";
import {ActivatedRoute} from "@angular/router";
import {PlantService} from "../../../../../services/PlantService";

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrl: './plant-details.component.scss'
})
export class PlantDetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private _plantService:PlantService) {
  }

  plant?: Plants;

  ngOnInit(): void {
    const id: string| null = this.route.snapshot.paramMap.get('id');

    this._plantService.getById(id).subscribe((data:any)=>{
      this.plant = data
    })
  }

}
