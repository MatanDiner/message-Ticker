import { Component,OnInit } from '@angular/core';
import {Imessage} from "./Models/message";
import {MessagesService} from './messages.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'messageTicker';
  messages:Imessage[];

  constructor(private messagesService:MessagesService){
    this.messages = [];
  }

  ngOnInit(){
   this.messages = this.messagesService.getMessages();

   /*  for(let i=0;i<8;i++){
       setInterval(()=>{
        this.messages = this.messagesService.getMessages(i,i+4);
       },1000)
     }*/
  }
}
