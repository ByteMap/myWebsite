import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faHome, faList, faTh, faSquare } from "@fortawesome/free-solid-svg-icons";
import { pulseAnimation } from "../animations";

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

  constructor() {}

  ngOnInit() {}

  changeView(newView: boolean) {
    this.viewChanged.emit(newView);
  }
}
