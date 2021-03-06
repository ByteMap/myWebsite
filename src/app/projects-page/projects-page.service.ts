import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ProjectsPageService {
  listViewState: boolean;
  listView: BehaviorSubject<boolean>;

  constructor() {
    this.listViewState = localStorage.getItem('projectsPageIsListView') ? JSON.parse(localStorage.getItem('projectsPageIsListView')) : true;
    this.listView = new BehaviorSubject<boolean>(this.listViewState);
  }

  changeView(newView: boolean) {
    this.listView.next(newView);
    localStorage.setItem('projectsPageIsListView', JSON.stringify(newView));
  }
}
