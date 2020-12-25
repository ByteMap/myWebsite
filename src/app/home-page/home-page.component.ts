import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { fromEvent, Observable } from "rxjs";
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from "rxjs/operators";
import {
  homeAboutAnimation,
  homeHeaderAnimation,
  homeIntroAnimation,
  homeTimelineHeaderAnimation,
  homeTimelineAnimation,
  homeSkillsAnimation,
  homeMoreInfoAnimation,
  homeConclusionAnimation
} from "../animations";
import { HomeModel, headerElements, timeLineElements, skillElements, moreInfoElements } from "../data.model";
import { ProgressRingComponent } from "../progress-ring/progress-ring.component";

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    homeHeaderAnimation,
    homeIntroAnimation,
    homeAboutAnimation,
    homeTimelineHeaderAnimation,
    homeTimelineAnimation,
    homeSkillsAnimation,
    homeMoreInfoAnimation,
    homeConclusionAnimation
  ]
})
export class HomePageComponent implements OnInit {
  @ViewChild('uncompressedAboutSection') uncompressedAboutSection: ElementRef;
  @ViewChild('compressedAboutSection') compressedAboutSection: ElementRef;
  @ViewChildren('progressCircle') progressCircles: QueryList<ProgressRingComponent>;
  skillDescription$: Observable<HomeModel.SkillElement>;

  headerIsVisible: string;
  headerIsVisibleSavedState: string;

  headerElements: Array<Array<HomeModel.PageElement>> = headerElements;
  timeLineElements: Array<HomeModel.TimeLineElement> = timeLineElements;
  skillElements: Array<HomeModel.SkillElement> = skillElements;
  moreInfoElements: Array<HomeModel.MoreInfoElement> = moreInfoElements;

  constructor(
    private router: Router,
    public mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    this.skillDescription$ = new Observable<HomeModel.SkillElement>((observer) => observer.next(this.skillElements[0]));
  }

  ngAfterViewInit() {
    this.displayHeaderAnimation();
  }

  executeMethod(action: HomeModel.ElementAction): void {
    switch(action.action) {
      case 'redirect': {
        this.router.navigate([action.parameter]);
        break;
      }
      case 'newTab': {
        window.open(action.parameter, '_blank');
        break;
      }
      default: {
        break;
      }
    }
  }

  scrollToAbout(): void {
    let section = this.mediaObserver.isActive('lt-md') ? this.compressedAboutSection : this.uncompressedAboutSection;
    section.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
  }

  displaySkillInformation(skill: HomeModel.SkillElement): void {
    this.skillDescription$ = new Observable<HomeModel.SkillElement>((observer) => observer.next(skill));
  }

  displayHeaderAnimation(): void {
    const scrollPosition$ = fromEvent(window, "scroll").pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]) : Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share(),
    );

    const scrollUp$ = scrollPosition$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown$ = scrollPosition$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => {
      this.headerIsVisible = 'visible',
      this.headerIsVisibleSavedState = 'visible'
    });
    scrollDown$.subscribe(() => {
      this.headerIsVisible = 'hidden',
      this.headerIsVisibleSavedState = 'hidden'
    });

    const mousePosition$ = fromEvent<MouseEvent>(window, "mousemove").pipe(
      throttleTime(10),
      distinctUntilChanged()
    );

    mousePosition$.subscribe(mousePosition =>
      mousePosition.clientY <= 56 ? this.headerIsVisible = 'visible' : this.headerIsVisible = this.headerIsVisibleSavedState
    );
  }

  public handleDone( event: any ) : void {
    console.log(event)
  }
}
