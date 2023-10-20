import { Injectable, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import {HubConnectionBuilder, HubConnection } from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {  

  public hubConnection: HubConnection;
  public subjectRecieveMessage = new Subject<any>();

  constructor() {
    
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl("https://localhost:7083/Socket").build();

   }

   public startConnection = () => {
    this.hubConnection
      .start()
      .then(() => console.log("Connection started"))
      .catch((err) => console.log("Error while starting connection: " + err));

  };

  public recieveMessage = () => {
    this.hubConnection.on("BranchCreated", (branch) => {
      this.subjectRecieveMessage.next(branch);
    });
  }

  public recieveMessageProduct = () => {
    this.hubConnection.on("ProductCreated", (product) => {
      this.subjectRecieveMessage.next(product);
    });
  }
}
 

