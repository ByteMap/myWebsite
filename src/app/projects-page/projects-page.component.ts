import { Component, OnInit } from "@angular/core";
import { ProjectsPageService } from "./projects-page.service";
import { ContentDialogData } from "../content-dialog/content-dialog.component";
import { ContentDialogService } from "../content-dialog/content-dialog.service";
import { faExternalLinkAlt, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export interface Project {
  title: string;
  briefDescription: string;
  detailedDescription: string;
  link: string;
  imagePath?: string;
  contributedProject: boolean;
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})

export class ProjectsPageComponent implements OnInit {
  listView: boolean = true;
  viewState: string;
  redirectIcon = faExternalLinkAlt;
  importantNoticeIcon = faExclamationCircle;

  importantNoticeTooltip: string = "This is one of the projects that I had made contributions to, hence it is not my own. Please click for more info.";
  projects: Array<Project> = [
    { title: `Personal Website`,
      briefDescription: `A website created to give a more detailed resume of myself`,
      detailedDescription: `This Angular project was designed to show off what my normal resume could not. Sure, my resume
                            could show to recruiters the projects that I had worked on and the experiences that I had built, but
                            the biggest flaw that I see with resumes is that they tend to not show off anything outside of experiences,
                            projects, and education. I wanted recruiters to get a better sense of who I am as a person, to see what drove
                            me to become a Software Engineer, and to show that I care about the quality for the work that I do. With
                            those reasons in mind, I had decided to build this project.
                            <div class="pt-2">
                              Technologies Used: <b> Angular 8, RxJS, Material, Angular Animations, FortAwesome, HTML, SCSS </b>
                            </div>`,
      link: `https://github.com/ByteMap/myWebsite`,
      imagePath: `../assets/images/projects-page-images/angular.png`,
      contributedProject: false
    },
    { title: `LinkMarker`,
      briefDescription: `A chrome extension that allows users to recolor hyperlinks`,
      detailedDescription: `I built LinkMarker for the sole purpose of visually filtering out mangas that had great covers, but
                            disappointing stories. What the chrome extension did was that it changed the color of all of the hypertexts
                            that the user had marked to red, which gave the user a sense of what those marked links would redirect to. This project
                            was extremely handy as it would remind me that a certain manga was not my taste despite having a great cover everytime I see
                            it when that manga gets a chapter update. Sometime in the near future, I intend to create a V2 of this project which would give
                            users more colors to choose from, and allow them to diversify their marked URLs.
                            <div class="pt-2">
                              Technologies Used: <b> JQuery, Chrome Storage API, HTML, CSS </b>
                            </div>`,
      link: `https://github.com/ByteMap/LinkMarker`,
      imagePath: `../assets/images/projects-page-images/linkMarker.png`,
      contributedProject: false
    },
    { title: `Dockstore`,
      briefDescription: `An online registry for BioTools and BioWorkflows`,
      detailedDescription: `Dockstore is an online registry for bioinformatic tools and workflows, and it is the open sourced project
                            that I had contributed on during my time with the Genomics Institute. The platform allows for users to create and
                            share their Docker based tools and workflows that are described in the Common Workflow Language, Workflow Description Language,
                            or the NextFlow Language. Additionally, the platform allows for organizations to be created so that their tools and workflows would
                            have a clear affiliation.
                            <div class="pt-2">
                              Technologies Used: <b> Angular 9, Java, Hibernate, OpenAPI, PostgreSQL Akita State Management, DropWizard, TravisCI, CircleCI </b>
                            </div>`,
      link: `https://dockstore.org`,
      imagePath: `../assets/images/projects-page-images/dockstore.png`,
      contributedProject: true
    },
    { title: `FreeBay`,
      briefDescription: `A platform made for users to donate their items easily`,
      detailedDescription: `FreeBay is a group project that I had worked on during my senior year of university. The project's main goal was to enable users
                            to donate their items without any hassles. All the user needs to do was create an account, take a picture of the item that
                            they want to donate away, list where the item can be picked up from, optionally include their contact information, and finally
                            post the item for people who are using the application to see.
                            <div class="pt-2">
                              Technologies Used: <b> Java, Android Studio, Camera API, Firebase, AndroidX </b>
                            </div>`,
      link: `https://github.com/kyeasy/CSE115a-freeBay-`,
      imagePath: ``,
      contributedProject: true
    }
  ];

  constructor(
    private contentDialogService: ContentDialogService,
    private projectsPageService: ProjectsPageService,
  ) {}

  ngOnInit(): void {
    this.projectsPageService.listView.subscribe(
      (isListView) => this.listView = isListView
    );
    this.viewState = JSON.parse(localStorage.getItem('projectsPageIsListView')) === true ? 'listView' : 'gridView';
  }

  changeView(newView: boolean) {
    this.projectsPageService.changeView(newView);
    this.viewState = this.viewState === 'listView' ? 'gridView' : 'listView';
  }

  redirect(url: string)  {
    window.open(url, '_blank');
  }
}
