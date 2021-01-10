import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { fromEvent, Observable } from "rxjs";
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from "rxjs/operators";
import { homeHeaderAnimation, homeSidebarAnimation, homeIntroAnimation, homeCompressedIntroAnimation, homeAboutAnimation, homeCompressedAboutAnimation,
         homeTimelineHeaderAnimation, homeTimelineAnimation, homeSkillsAnimation, homeCompressedSkillsAnimation, homeMoreInfoAnimation,
         homeCompressedMoreInfoAnimation, homeConclusionAnimation, homeCompressedConclusionAnimation } from "../animations";
import { HomeModel, headerElements, timeLineElements, skillElements, moreInfoElements } from "../data.model";
import { ProgressRingComponent } from "../progress-ring/progress-ring.component";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
    homeSidebarAnimation,
    homeIntroAnimation,
    homeCompressedIntroAnimation,
    homeAboutAnimation,
    homeCompressedAboutAnimation,
    homeTimelineHeaderAnimation,
    homeTimelineAnimation,
    homeSkillsAnimation,
    homeCompressedSkillsAnimation,
    homeMoreInfoAnimation,
    homeCompressedMoreInfoAnimation,
    homeConclusionAnimation,
    homeCompressedConclusionAnimation
  ]
})
export class HomePageComponent implements OnInit {
  @ViewChild('uncompressedAboutSection') uncompressedAboutSection: ElementRef;
  @ViewChild('compressedAboutSection') compressedAboutSection: ElementRef;
  @ViewChildren('progressCircle') progressCircles: QueryList<ProgressRingComponent>;

  skillDescription$: Observable<HomeModel.SkillElement>;

  headerIsVisible: string;
  headerIsVisibleSavedState: string;
  sidebarToggled: string = 'hide';
  introSectionAnimationState: string = 'initial';
  aboutSectionAnimationState: string = 'initial';
  timelineSectionAnimationState: string = 'initial';
  skillsSectionAnimationState: string = 'initial';
  moreInfoSectionAnimationState: string = 'initial';
  conclusionSectionAnimationState: string = 'initial';

  headerElements: Array<Array<HomeModel.PageElement>> = headerElements;
  moreInfoElements: Array<HomeModel.PageElement> = moreInfoElements;
  timeLineElements: Array<HomeModel.TimeLineElement> = timeLineElements;
  skillElements: Array<HomeModel.SkillElement> = skillElements;
  sidebarIcon = faBars;
  sidebarExit = faTimes;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    public mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    this.skillDescription$ = new Observable<HomeModel.SkillElement>((observer) => observer.next(this.skillElements[0]));
  }

  ngAfterViewInit() {
    this.displayHeaderAnimation();
    this.changeAnimationStates();
  }

  executeMethod(action: HomeModel.ElementAction): void {
    document.querySelector('body').style.overflow = 'auto';
    document.getElementById('content').style.filter = 'none';
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
    Array.from(document.getElementsByClassName('skill-name-container') as HTMLCollectionOf<HTMLElement>).forEach(element => {
      element.style.backgroundColor = '#C9CAF8';
    })
    document.getElementById(skill.skill).style.backgroundColor = '#EBEBEB';
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

  toggleSidebar($event): void {
    $event.stopPropagation();
    this.sidebarToggled = 'hide' ? 'show' : 'hide';
    if (this.sidebarToggled) {
      document.querySelector('body').style.overflow = 'hidden';
      document.getElementById('content').style.filter = 'blur(5px)';
    }
  }

  @HostListener('document:click', ['$event'])
  onBodyClick(): void {
    this.sidebarToggled = 'hide';
    document.querySelector('body').style.overflow = 'auto';
    document.getElementById('content').style.filter = 'none';
  }

  changeAnimationStates(): void {
    const viewElements = document.querySelectorAll('.home-section');
    let observer = new IntersectionObserver(elements => {
      elements.forEach(element => {
        if(element.isIntersecting && element.target.id === 'intro-section') {
          this.introSectionAnimationState = 'toggleIntroAnimation';
          observer.unobserve(element.target);
        } else if(element.isIntersecting && element.target.id === 'about-section') {
          this.aboutSectionAnimationState = 'toggleAboutAnimation';
          observer.unobserve(element.target);
        } else if(element.isIntersecting && element.target.id === 'timeline-section' && !this.mediaObserver.isActive('lt-md')) {
          this.timelineSectionAnimationState = 'toggleUncompressedTimelineAnimation';
          observer.unobserve(element.target);
        } else if(element.isIntersecting && element.target.id === 'timeline-section' && this.mediaObserver.isActive('lt-md')) {
          this.timelineSectionAnimationState = 'toggleCompressedTimelineAnimation';
          observer.unobserve(element.target);
        } else if(element.isIntersecting && element.target.id === 'skills-section') {
          this.skillsSectionAnimationState = 'toggleSkillsAnimation';
          observer.unobserve(element.target);
        } else if(element.isIntersecting && element.target.id === 'moreInfo-section') {
          this.moreInfoSectionAnimationState = 'toggleMoreInfoAnimation';
          observer.unobserve(element.target);
        } else if(element.isIntersecting && element.target.id === 'conclusion-section') {
          this.conclusionSectionAnimationState = 'toggleConclusionAnimation';
          observer.unobserve(element.target);
        }
      })
    }, { threshold: 0.1 })
    viewElements.forEach(element => { observer.observe(element) });
  }

  sendEmail() {
    let subject = "";
    let content = ""
    document.location.href = "mailto:andychen159@gmail.com?subject=" + subject + "&body=" + content;
  }

  public handleDone( event: any ) : void {
    console.log(event)
  }
}
