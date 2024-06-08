
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private _url = environment.serverBasePath;
  private apiUrl = this._url+'/api/v1/plant';

  constructor(private _http: HttpClient) { }
  getAll(userId:any){
    return this._http.get(`${this.apiUrl}/user/${userId}`);
  }

  addPlant(item:any){
    return this._http.post(this.apiUrl,item);
  }

  updatePlant(id:any, item:any){
    return this._http.put(`${this.apiUrl}/${id}`, item)
  }

  getById(id:any){
    return this._http.get(`${this.apiUrl}/${id}`)
  }

}

