import { Component, OnInit ,Input} from '@angular/core';
import {Imessage} from "../Models/message";
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message:Imessage;
  constructor() { }

  ngOnInit() {
  }

}
