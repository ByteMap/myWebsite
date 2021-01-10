import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MediaObserver } from "@angular/flex-layout";
import { ProjectsPageService } from "./projects-page.service";
import { ContentDialogService } from "../content-dialog/content-dialog.service";
import { ContentDialogData } from "../content-dialog/content-dialog.component";
import { faExclamationCircle, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { projects, ProjectsModel } from "../data.model";
import {projectsPageAnimation} from "../animations";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  animations: [ projectsPageAnimation ]
})

export class ProjectsPageComponent implements OnInit {
  listView: boolean = true;
  viewState: string;
  redirectIcon = faExternalLinkAlt;
  importantNoticeIcon = faExclamationCircle;

  importantNoticeTooltip: string = "This is one of the projects that I had made contributions to, hence it is not my own.";
  projects: Array<ProjectsModel.Project> = projects;

  constructor(
    private contentDialogService: ContentDialogService,
    private projectsPageService: ProjectsPageService,
    public mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    this.projectsPageService.listView.subscribe(
      (isListView) => this.listView = isListView
    );
    this.viewState = JSON.parse(localStorage.getItem('projectsPageIsListView')) === true ? 'listView' : 'gridView';
    document.querySelector('body').style.overflowX = 'hidden';
    document.querySelector('html').style.overflowX = 'hidden';
  }

  openDialog(project: ProjectsModel.Project) {
    const contentDialogData: ContentDialogData = {
      dialogTitle: project.title,
      dialogContent: project.detailedDescription,
      dialogHeaderStyle: 'font-Droid-Serif fs-50 fw-b',
      dialogContentStyle: this.mediaObserver.isActive('xs') ? 'body-padding-1 pt-2 font-Droid-Serif fs-40' : 'body-padding-1 pt-2 font-Droid-Serif fs-50'
    };
    this.contentDialogService.openContentDialog(contentDialogData, '60rem');
  }

  changeView(newView: boolean) {
    this.projectsPageService.changeView(newView);
    this.viewState = this.viewState === 'listView' ? 'gridView' : 'listView';
  }

  redirect(url: string)  {
    window.open(url, '_blank');
  }
}
