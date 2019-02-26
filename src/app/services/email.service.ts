import { Injectable } from '@angular/core';
import { IMessageInterface } from "./IMessageInterface.interface";

@Injectable({
  providedIn: 'root'
})
export class EmailService implements IMessageInterface{

  constructor() { }

  sendMessage(recipient: string, message: string): string {
    return "Email sent to " + recipient + " with message [ " + message + " ]";
  }
}
