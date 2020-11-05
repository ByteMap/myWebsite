import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MediaObserver } from "@angular/flex-layout";
import { faHome, faList, faTh, faSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})

export class PageHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() listView: boolean;
  @Output() viewChanged = new EventEmitter();

  homeIcon = faHome;
  listIcon = faList;
  gridIcon = faTh;
  squareIcon = faSquare;

  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit() {}

  changeView(newView: boolean) {
    this.viewChanged.emit(newView);
  }
}
