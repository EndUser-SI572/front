// src/app/services/websocket.service.ts
import { Injectable } from '@angular/core';
import { StompService, StompConfig } from '@stomp/ng2-stompjs';
import { Observable, Subject } from 'rxjs';
import SockJS from 'sockjs-client';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompService: StompService;
  private airDataSubject = new Subject<any>();
  private plantDataSubject = new Subject<any>();

  websocketUrl = environment.websocketUrl
  constructor() {
    const stompConfig: StompConfig = {
      url: () => new SockJS(this.websocketUrl),
      headers: {},
      heartbeat_in: 0,
      heartbeat_out: 20000,
      reconnect_delay: 5000,
      debug: true
    };
    this.stompService = new StompService(stompConfig);

    // subscribe to airData topic
    this.stompService.subscribe('/topic/airData').subscribe((message) => {
      this.airDataSubject.next(JSON.parse(message.body));
    });

    // subscribe to soilData topic
    this.stompService.subscribe('/topic/plantData').subscribe((message) => {
      this.plantDataSubject.next(JSON.parse(message.body));
    });
  }

  getAirDataUpdates(): Observable<any> {
    return this.airDataSubject.asObservable();
  }

  getPlantDataUpdates(): Observable<any> {
    return this.plantDataSubject.asObservable();
  }
}
