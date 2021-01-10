import { Component, Input, OnInit } from "@angular/core";
import { MediaObserver } from "@angular/flex-layout";
import { HomeModel } from "../data.model";
import { homeTimelineAnimation } from "../animations";

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [homeTimelineAnimation]
})
export class TimelineComponent implements OnInit {
  @Input() compressed: boolean;
  @Input() data: Array<HomeModel.TimeLineElement>;

  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit() {
  }

}
