import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
var SockJs = require("sockjs-client");
var Stomp = require("stompjs");



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  public notifications = 0;

  constructor(private httpService:HttpService) {
    this.initializeWebSocketConnection();
   }
   initializeWebSocketConnection(){
     // Open connection with server socket
     let socket = new SockJs('http://localhost:8080/socket');

     let stompClient = Stomp.over(socket); 
    stompClient.connect({}, frame => {

			// Subscribe to notification topic
            stompClient.subscribe('/topic/notification', notifications => {

				// Update notifications attribute with the recent messsage sent from the server
                this.notifications = JSON.parse(notifications.body).count;
            })
        });
  }
 

}
