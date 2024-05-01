import { Injectable } from '@angular/core';
import {PlantsGateway} from "../../../domain/gateway/plantsGateway";
import {Observable} from "rxjs";
import {Plants} from "../../../domain/models/plants";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlantsApiService extends PlantsGateway{

  private _url = environment.serverBasePath;
  resourceEndpoint: string = '/plants/';

  constructor(private http:HttpClient) {
    super();
  }

  getAll(): Observable<Plants[]> {
    return this.http.get<Array<Plants>>(this._url+this.resourceEndpoint);
  }

  getByID(id: string | null): Observable<Plants> {
    return this.http.get<Plants>(this._url+this.resourceEndpoint+id);
  }

  savePlant(_plant: Plants): Observable<any> {
    return this.http.post(this._url+this.resourceEndpoint,_plant);
  }

  updatePlant(id: string, _plant: Plants): Observable<any> {
    return this.http.post(this._url+this.resourceEndpoint+id,_plant);
  }
}
