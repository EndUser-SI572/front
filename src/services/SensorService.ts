
import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  private _url = environment.serverBasePath;
  private apiUrl = this._url+'/sensor/api/v1';

  constructor(private _http: HttpClient,

              )
  { }

  getIrrigate(){
    return this._http.get(`${this.apiUrl}/irrigate`);

  }

  getLastAirData(){
    return this._http.get(`${this.apiUrl}/air/last`);
  }

  getLastSoilData(){
    return this._http.get(`${this.apiUrl}/soil/last`);
  }


}
