import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ExperiencePageService {
  listViewState: boolean;
  listView$: BehaviorSubject<boolean>;

  constructor() {
    this.listViewState = localStorage.getItem('experiencePageIsListView') ? JSON.parse(localStorage.getItem('experiencePageIsListView')) : true;
    this.listView$ = new BehaviorSubject<boolean>(this.listViewState);
  }

  changeView(newView: boolean) {
    this.listView$.next(newView);
    localStorage.setItem('experiencePageIsListView', JSON.stringify(newView));
  }
}
