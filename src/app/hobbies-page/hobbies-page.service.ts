import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class HobbiesPageService {
  listViewState: boolean;
  private listView;
  currentView$: Observable<boolean>;

  constructor() {
    this.listViewState = localStorage.getItem('hobbiesPageIsListView') ? JSON.parse(localStorage.getItem('hobbiesPageIsListView')) : true;
    this.listView = new BehaviorSubject<boolean>(this.listViewState);
    this.currentView$ = this.listView.asObservable();
  }

  changeView(newView: boolean) {
    this.listView.next(newView);
    localStorage.setItem('hobbiesPageIsListView', JSON.stringify(newView));
  }
}
