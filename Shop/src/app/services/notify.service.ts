import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
private readonly notifier: NotifierService;
  constructor(public notify:NotifierService) {
    this.notifier = notify;
   }
}
