import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HobbiesPageService {
  private listView = new BehaviorSubject<boolean>(true);
  currentView$ = this.listView.asObservable();

  constructor() {
  }

  changeView(newView: boolean) {
    this.listView.next(newView);
    console.log(this.listView);
  }
}
