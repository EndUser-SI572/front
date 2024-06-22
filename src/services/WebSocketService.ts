// src/app/services/websocket.service.ts
import { Injectable } from '@angular/core';
import { StompService, StompConfig } from '@stomp/ng2-stompjs';
import { Observable, Subject } from 'rxjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompService: StompService;
  private airDataSubject = new Subject<any>();
  private soilDataSubject = new Subject<any>();

  constructor() {
    const stompConfig: StompConfig = {
      url: () => new SockJS('http://localhost:8080/ws'),
      headers: {},
      heartbeat_in: 0,
      heartbeat_out: 20000,
      reconnect_delay: 5000,
      debug: true
    };
    this.stompService = new StompService(stompConfig);

    // Subscribe to airData topic
    this.stompService.subscribe('/topic/airData').subscribe((message) => {
      this.airDataSubject.next(JSON.parse(message.body));
    });

    // Subscribe to soilData topic
    this.stompService.subscribe('/topic/soilData').subscribe((message) => {
      this.soilDataSubject.next(JSON.parse(message.body));
    });
  }

  getAirDataUpdates(): Observable<any> {
    return this.airDataSubject.asObservable();
  }

  getSoilDataUpdates(): Observable<any> {
    return this.soilDataSubject.asObservable();
  }
}
