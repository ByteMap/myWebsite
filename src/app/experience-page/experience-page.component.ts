import { Component, OnInit } from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";
import { ExperiencePageService } from "./experience-page.service";
import { ContentDialogService } from "../content-dialog/content-dialog.service";
import { experiencePageAnimation } from "../animations";
import { ContentDialogData } from "../content-dialog/content-dialog.component";
import { ExperienceModel, experiences } from "../data.model";

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
  animations: [
    experiencePageAnimation,
  ]
})

export class ExperiencePageComponent implements OnInit {
  listView: boolean;
  viewState: string;
  experiences: Array<ExperienceModel.Experience> = experiences;

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

  openDialog(experience: ExperienceModel.Experience) {
    const nonCompressedDialogTitle = `<b class="row">
                                        <span class="columnThirds left-text">` + experience.company + `</span>
                                        <span class="columnThirds center-text">` + experience.position + `</span>
                                        <span class="columnThirds right-text">` + experience.timePeriod + `</span>
                                      </b>`
    const compressedDialogTitle = `<b class="font-Droid-Serif fs-50 fw-b row default-title" fxHide fxShow.lt-md fxShow.md>
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
