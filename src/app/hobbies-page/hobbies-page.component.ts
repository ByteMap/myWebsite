import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MediaObserver} from "@angular/flex-layout";
import {HobbiesPageService} from './hobbies-page.service';
import {MatDialog} from "@angular/material/dialog";
import {ContentDialogService} from "../content-dialog/content-dialog.service";
import {ContentDialogData} from "../content-dialog/content-dialog.component";
import {hobbies, HobbiesModel} from "../data.model";
import {hobbiesPageAnimation} from "../animations";

@Component({
  selector: 'app-hobbies-page',
  templateUrl: './hobbies-page.component.html',
  styleUrls: ['./hobbies-page.component.scss'],
  animations: [ hobbiesPageAnimation ]
})

export class HobbiesPageComponent implements OnInit {
  listView: boolean;
  viewState: string;
  hobbies: Array<HobbiesModel.Hobby> = hobbies;

  constructor(
    private hobbiesPageService: HobbiesPageService,
    private dialog: MatDialog,
    private contentDialogService: ContentDialogService,
    public mediaObserver: MediaObserver
  ) { }

  ngOnInit(): void {
    this.hobbiesPageService.currentView$.subscribe(isListView => this.listView = isListView);
    this.viewState = JSON.parse(localStorage.getItem('hobbiesPageIsListView')) === true ? 'listView' : 'gridView';
    document.querySelector('body').style.overflowX = 'hidden';
    document.querySelector('html').style.overflowX = 'hidden';
  }

  openDialog(hobby: HobbiesModel.Hobby) {
    const contentDialogData: ContentDialogData = {
      dialogTitle: hobby.title,
      dialogContent: hobby.content,
      dialogHeaderStyle: 'font-Droid-Serif fs-50 fw-b',
      dialogContentStyle: this.mediaObserver.isActive('xs') ? 'body-padding-1 pt-2 font-Droid-Serif fs-40' : 'body-padding-1 pt-2 font-Droid-Serif fs-50'
    }
    this.contentDialogService.openContentDialog(contentDialogData, "60rem");
  }

  changeView(newView: boolean) {
    this.hobbiesPageService.changeView(newView);
    this.viewState = this.viewState === 'listView' ? 'gridView' : 'listView'
  }

  // Debugging method for Angular animations
  public handleDone( event: any ) : void {
    console.log(event)
  }
}
