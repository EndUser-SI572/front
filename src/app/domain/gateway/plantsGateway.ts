import {Observable} from "rxjs";
import {Plants} from "../models/plants";


export abstract class PlantsGateway{
  abstract getByID(id: string | null): Observable<Plants>;
  abstract getAll(): Observable<Array<Plants>>;
  abstract savePlant(_plant: Plants): Observable<any>;
  abstract updatePlant(id: string, _plant: Plants): Observable<any>;
}
