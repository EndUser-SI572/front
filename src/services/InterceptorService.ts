
import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./UserService";


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private _userService:UserService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this._userService.getToken()

    if(token != ""){
      req=req.clone(
        {
          setHeaders:{
            'Content-type':'application/json;charset=utf-8',
            'Accept':'application/json',
            'Authorization':`Bearer ${token}`,
          }
        }

      )
    }

    return next.handle(req);
  }


}



