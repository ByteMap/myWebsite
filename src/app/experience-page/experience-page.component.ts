import { Component, OnInit } from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";
import { ExperiencePageService } from "./experience-page.service";
import { ContentDialogService } from "../content-dialog/content-dialog.service";
import { cardFadeInAnimation } from "../animations";
import { ContentDialogData } from "../content-dialog/content-dialog.component";

export interface Experience {
  company: string;
  position: string;
  timePeriod: string;
  details: string;
  imagePath: string;
}

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
  animations: [
    cardFadeInAnimation,
  ]
})

export class ExperiencePageComponent implements OnInit {
  listView: boolean;
  viewState: string;

  experiences: Array<Experience> = [
    { company: 'UCSC Genomics Institute',
      position: `Software Engineer, Intern`,
      timePeriod: `Aug 2019 - Sept 2020`,
      details: `<div>
                  I had started working for the Genomics Institute during the summer of my Junior year in college and had continued
                  to work there for over a year. I started off working as a Front End Developer, and throughout the year, slowly delved into
                  Back End work. The beginning of my time with the GI, or the Dockstore team, was a bit tough, but also very enjoyable. I barely
                  had any experience with UI development, but regardless, I started diving into Angular 8, Observables, Material, Asynchronous development,
                  Test Driven Development, and more. Likewise with learning about the UI, working with the backend, and overall, with the team was a great
                  and enjoyable learning experience. For example, despite my experience with Java, I was clueless when I was assigned a ticket that had
                  to do with Java Hibernate, but nevertheless, I had fun learning and utilizing it. Additionally, I also had experience with working in
                  groups prior to working at the Genomics Institute, but working in a professional environment completely threw me off. I had no experience with
                  SCRUM development until joining the team, but after settling in, I was well-versed with stand-up meetings, sprint plannings, and retrospectives.
                  Overall, my time with the Genomics Institute was priceless and delightful. The experience had not only given me knowledge of Full Stack
                  Development and SCRUM development, but also a sense of what the industry is like, such as how I will be constantly learning and adapting to new
                  technologies.
                  <div class="pt-2">
                    <b> Skills Acquired: </b>
                    Angular 8, Java Hibernate, RESTful API, Akita State Management, OpenAPI, Swagger, Angular Material, CircleCI, TravisCI,
                    PostgreSQL, GitHub, SCRUM development
                  </div>
                </div>`,
      imagePath: '../assets/images/experience-page-images/GI.png' },
    { company: `UCSC School of Engineering`,
      position: `Data Structures Class Grader`,
      timePeriod: `Sept 2018 - Dec 2018`,
      details: `<div>
                  This was essentially my first job related to the field that I was studying in. Although my role as a grader wasn't
                  flashy or anything special, it nonetheless introduced me to the different methodologies and thought processes that
                  the students had used to create and implement their own data structures. If anything, I was not only grading, but
                  also learning from some of the students who had approached issues in an entirely more elegant manner than I would
                  have. Aside from that, working as a grader was overall an interesting experience that taught me the importance
                  of time management as well as the frustrations of scripts failing due to missing edge cases.
                  <div class="pt-2">
                    <b> Skills Acquired: </b>
                    Python, more familiarity with GitHub branches, Time management
                  </div>
                </div>`,
      imagePath: '../assets/images/experience-page-images/BSOE.png'}
  ];

  constructor(
    private experiencePageService: ExperiencePageService,
    private contentDialogService: ContentDialogService,
    public mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    this.experiencePageService.listView$.subscribe(
      (isListView) => this.listView = isListView
    )
    this.viewState = JSON.parse(localStorage.getItem('experiencePageIsListView')) === true ? 'listView' : 'gridView';
  }

  changeView(newView: boolean) {
    this.experiencePageService.changeView(newView);
    this.viewState = this.viewState === 'listView' ? 'gridView' : 'listView'
  }

  openDialog(experience: Experience) {
    const nonCompressedDialogTitle = `<b class="row">
                                        <span class="columnThirds left-text">` + experience.company + `</span>
                                        <span class="columnThirds center-text">` + experience.position + `</span>
                                        <span class="columnThirds right-text">` + experience.timePeriod + `</span>
                                      </b>`
    const compressedDialogTitle = `<b class="font-Droid-Serif fs-50 fw-b row title" fxHide fxShow.lt-md fxShow.md>
                                      <span class="center-text">` + experience.company + `</span>
                                   </b>`
    const contentDialogData: ContentDialogData = {
      dialogTitle: this.mediaObserver.isActive('xs') ? compressedDialogTitle : nonCompressedDialogTitle,
      dialogContent: experience.details,
      dialogHeaderStyle: this.mediaObserver.isActive('xs') ? 'font-Droid-Serif fs-50 row title' : 'font-Droid-Serif fs-50',
      dialogContentStyle: this.mediaObserver.isActive('xs') ? 'body-padding-1 pt-2 font-Droid-Serif fs-40' : 'body-padding-1 pt-2 font-Droid-Serif fs-50'
    }
    this.contentDialogService.openContentDialog(contentDialogData, "75rem");
  }

  // Debugging method for Angular animations
  public handleDone( event: any ) : void {
    console.log(event)
  }
}
