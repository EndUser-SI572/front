import {PlantsGateway} from "../gateway/plantsGateway";
import {Observable} from "rxjs";
import {Plants} from "../models/plants";
import {Injectable} from "@angular/core";
import {AbstractControl, ValidationErrors, ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class PlantsUseCases{

  constructor(private _plantsGateway: PlantsGateway) {}

  getPlantsById(id: string | null): Observable<Plants>{
    return this._plantsGateway.getByID(id);
  }
  getAllPlants(): Observable<Array<Plants>>{
    return this._plantsGateway.getAll();
  }

  createPlants( _plant:Plants): Observable<any>{
    return this._plantsGateway.savePlant(_plant);
  }

  updatePlant(id: string, _plant: Plants): Observable<any>{
    return this._plantsGateway.updatePlant(id,_plant);
  }

  deletePlant(id: string): Observable<any>{
    return this._plantsGateway.delete(id);
  }


}
