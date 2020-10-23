import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ProjectsPageService {
  listViewState: boolean;
  listView: BehaviorSubject<boolean>;

  constructor() {
    this.listViewState = JSON.parse(localStorage.getItem('projectsPageIsListView'));
    this.listView = new BehaviorSubject<boolean>(this.listViewState);
  }

  changeView(newView: boolean) {
    this.listView.next(newView);
    localStorage.setItem('projectsPageIsListView', JSON.stringify(newView));
  }
}
