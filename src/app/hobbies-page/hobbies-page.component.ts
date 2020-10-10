import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HobbiesPageService } from './hobbies-page.service';
import { MatDialog } from "@angular/material/dialog";
import { ContentDialogService } from "../content-dialog/content-dialog.service";
import { ContentDialogData } from "../content-dialog/content-dialog.component";

export interface Hobby {
  title: string;
  content: string;
  imagePath: string;
}

@Component({
  selector: 'app-hobbies-page',
  templateUrl: './hobbies-page.component.html',
  styleUrls: ['./hobbies-page.component.scss'],
})

export class HobbiesPageComponent implements OnInit {
  listView: boolean;
  contentContainerColor: string;

  hobbies: Array<Hobby> = [
    { title:   'Anime & Manga',
      content: `<div>
                  I've loved watching Animes and reading Mangas ever since I was in middle school. For me,
                  these two hobbies were not only a form of entertainment, but also a way for me to forget
                  about my problems for a short amount of time. They have ultimately acted as my best coping
                  mechanism for stress and anxiety, which allowed me to reset myself and perform even better
                  on things such as work and school.
                </div>
                <div class="pt-2">
                  Some of my favorite Animes and Mangas are: <b>Re:Zero, Steins;Gate, and Gundam 00</b>
                </div>`,
      imagePath: '../assets/images/hobbies-page-images/anime-image.png' },
    { title:   'Games',
      content: `<div>
                  I've loved watching Animes and reading Mangas ever since I was in middle school. For me,
                  these two hobbies were not only a form of entertainment, but also a way for me to forget
                  about my problems for a short amount of time. They have ultimately acted as my best coping
                  mechanism for stress and anxiety, which allowed me to reset myself and perform even better
                  on things such as work and school.
                </div>
                <div class="pt-2">
                  Some of my favorite Animes and Mangas are: <b>Re:Zero, Steins;Gate, and Gundam 00</b>
                </div>`,
      imagePath: '../assets/images/hobbies-page-images/game-image.png' },
    { title:   'Investing',
      content: `<div>
                  I've loved watching Animes and reading Mangas ever since I was in middle school. For me,
                  these two hobbies were not only a form of entertainment, but also a way for me to forget
                  about my problems for a short amount of time. They have ultimately acted as my best coping
                  mechanism for stress and anxiety, which allowed me to reset myself and perform even better
                  on things such as work and school.
                </div>
                <div class="pt-2">
                  Some of my favorite Animes and Mangas are: <b>Re:Zero, Steins;Gate, and Gundam 00</b>
                </div>`,
      imagePath: '../assets/images/hobbies-page-images/investing-image.png' },
    { title:   'Programming',
      content: `<div>
                  Programming is my job as well as my hobby. During my weekends and holidays, I would try to at least
                  progress a little bit with my projects and discover new frameworks and libraries to use. Most of my
                  projects are centered around visualizing data and aiding users such as myself. For example, LinkMarker
                  was created so that I could visually blacklist mangas as some of them would have poor stories, but
                  fantastic covers which baits me into clicking on their links every time they update with a new chapter.
                  All in all, building new things gives me a sense of satisfaction, which I really love.
                </div>`,
      imagePath: '../assets/images/hobbies-page-images/programming-image.png' },
    { title:   'Music',
      content: `<div>
                  I've loved watching Animes and reading Mangas ever since I was in middle school. For me,
                  these two hobbies were not only a form of entertainment, but also a way for me to forget
                  about my problems for a short amount of time. They have ultimately acted as my best coping
                  mechanism for stress and anxiety, which allowed me to reset myself and perform even better
                  on things such as work and school.
                </div>
                <div class="pt-2">
                  Some of my favorite Animes and Mangas are: <b>Re:Zero, Steins;Gate, and Gundam 00</b>
                </div>`,
      imagePath: '../assets/images/hobbies-page-images/music-image.png' },
  ];

  constructor(
    private hobbiesPageService: HobbiesPageService,
    private dialog: MatDialog,
    private contentDialogService: ContentDialogService
  ) { }

  ngOnInit(): void {
    this.hobbiesPageService.currentView$
      .subscribe(isListView =>
        this.listView = isListView
      );
  }

  openDialog(hobby: Hobby) {
    const contentDialogData: ContentDialogData = {
      dialogTitle: hobby.title,
      dialogContent: hobby.content
    }
    this.contentDialogService.openContentDialog(contentDialogData, "50rem");
  }

  changeView(newView: boolean) {
    this.hobbiesPageService.changeView(newView);
  }

}
