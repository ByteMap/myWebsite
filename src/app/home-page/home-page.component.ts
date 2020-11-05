import {Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild} from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { fromEvent } from "rxjs";
import { distinctUntilChanged, filter, map, pairwise, share, tap, throttleTime } from "rxjs/operators";
import { homeHeaderAnimation } from "../animations";

export interface ElementAction {
  action: string,
  parameter ?: string
}

export interface PageElements {
  elementName?: string,
  elementIcon?: any,
  elementAction: ElementAction
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [ homeHeaderAnimation ]
})
export class HomePageComponent implements OnInit {
  @ViewChild('uncompressedAboutSection') uncompressedAboutSection: ElementRef;
  @ViewChild('compressedAboutSection') compressedAboutSection: ElementRef;

  headerIsVisible: string;
  headerIsVisibleSavedState: string;

  gitHubIcon = faGithub;
  linkedInIcon = faLinkedin;

  headerElements: Array<Array<PageElements>> = [
    [
      { elementIcon: this.gitHubIcon,
        elementAction: {action: 'newTab', parameter: 'https://github.com/ByteMap'} },
      { elementIcon: this.linkedInIcon,
        elementAction: {action: 'newTab', parameter: 'https://www.linkedin.com/in/andy-chen-929ba6a2/'} }
    ],
    [
      { elementName: 'Hobbies',
        elementAction: { action: 'redirect', parameter: 'my-hobbies' } },
      { elementName: 'Experiences',
        elementAction: { action: 'redirect', parameter: 'my-experience' }  },
      { elementName: 'Projects',
        elementAction: { action: 'redirect', parameter: 'my-projects' }  },
      { elementName: 'Resume',
        elementAction: { action: 'redirect' }  }
    ]
  ];

  constructor(
    private router: Router,
    public mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
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

    scrollUp$.subscribe(() => { this.headerIsVisible = 'visible', this.headerIsVisibleSavedState = 'visible' });
    scrollDown$.subscribe(() => { this.headerIsVisible = 'hidden', this.headerIsVisibleSavedState = 'hidden' });

    const mousePosition$ = fromEvent<MouseEvent>(window, "mousemove").pipe(
      throttleTime(10),
      distinctUntilChanged()
    );

    mousePosition$.subscribe(mousePosition =>
      mousePosition.clientY <= 56 ? this.headerIsVisible = 'visible' : this.headerIsVisible = this.headerIsVisibleSavedState
    );
  }

  executeMethod(action: ElementAction) {
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

  toggleHeaderVisibility() {
    this.headerIsVisible = 'visible';
  }

  scrollToAbout() {
    let section = this.mediaObserver.isActive('lt-md') ? this.compressedAboutSection : this.uncompressedAboutSection;
    section.nativeElement.scrollIntoView({behavior: "smooth", block: "center"});
  }

}
