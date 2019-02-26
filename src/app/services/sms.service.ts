import { Injectable } from '@angular/core';
import { IMessageInterface } from "./IMessageInterface.interface";

@Injectable({
  providedIn: 'root'
})
export class SmsService implements IMessageInterface {

  constructor() { }

  sendMessage(recipient: string, message: string): string {
    return "SMS sent to " + recipient + " with message [ " + message + " ]";
  }
}
