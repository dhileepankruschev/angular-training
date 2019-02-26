import { Component, OnInit, Inject } from '@angular/core';
import { IMessageInterface } from "../services/IMessageInterface.interface";

@Component({
  selector: 'app-message-service',
  templateUrl: './message-service.component.html',
  styleUrls: ['./message-service.component.css']
})
export class MessageServiceComponent implements OnInit {

  message: string;
  constructor( @Inject("IService") private msrvc: IMessageInterface) { }

  ngOnInit() {
  }

  sendMessage(recipient: HTMLInputElement, message: HTMLInputElement) {
    this.message = this.msrvc.sendMessage(recipient.value, message.value);
  }

}
