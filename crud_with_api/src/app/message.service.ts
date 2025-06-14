import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private message: string = '';

  setMessage(msg: string) {
    this.message = msg;
  }

  getMessage(): string {
    const msg = this.message;
    this.message = ''; // Clear after reading
    return msg;
  }
}
