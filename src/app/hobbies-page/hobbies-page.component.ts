import { Component, OnInit } from '@angular/core';
import { HobbiesPageService } from './hobbies-page.service';
import {MatDialog} from "@angular/material/dialog";
import {ContentDialogService} from "../content-dialog/content-dialog.service";
import {ContentDialogData} from "../content-dialog/content-dialog.component";

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
  view = 'default';
  backgroundImage: string;
  contentContainerColor: string;
  gamesImage = 'url(\'../assets/images/hobbies-page-images/Games-Background.jpg\')';
  gamesContainerColor = '#91D6D4';
  animeImage = 'url(\'../assets/images/hobbies-page-images/Anime-Background.jpg\')';
  animeContainerColor = '#5297CF';
  stockImage = 'url(\'../assets/images/hobbies-page-images/Stocks-Background.jpg\')';
  stockContainerColor = '#8CB8DC';
  musicImage = 'url(\'../assets/images/hobbies-page-images/Music-Background.jpg\')';
  musicContainerColor = '#5F676D';

  hobbies: Array<Hobby> = [
    { title:   `<div class="font-Droid-Serif fs-50 fw-b">
                Anime & Manga
                </div>`,
      content: `<div class="font-Droid-Serif fs-50">
                    <div>
                      I've loved watching Animes and reading Mangas ever since I was in middle school. For me,
                      these two hobbies were not only a form of entertainment, but also a way for me to forget
                      about my problems for a short amount of time. They have ultimately acted as my best coping
                      mechanism for stress and anxiety, which allowed me to reset myself and perform even better
                      on things such as work and school.
                    </div>
                    <div class="pt-2">
                      Some of my favorite Animes and Mangas are: <b>Re:Zero, Steins;Gate, and Gundam 00</b>
                    </div>
                </div>`,
      imagePath: '../assets/images/hobbies-page-images/anime-image.png' },
    { title:   `<div class="font-Droid-Serif fs-50 fw-b">
                Games
                </div>`,
      content: `<div class="font-Droid-Serif fs-50">
                    <div>
                      I've loved watching Animes and reading Mangas ever since I was in middle school. For me,
                      these two hobbies were not only a form of entertainment, but also a way for me to forget
                      about my problems for a short amount of time. They have ultimately acted as my best coping
                      mechanism for stress and anxiety, which allowed me to reset myself and perform even better
                      on things such as work and school.
                    </div>
                    <div class="pt-2">
                      Some of my favorite Animes and Mangas are: <b>Re:Zero, Steins;Gate, and Gundam 00</b>
                    </div>
                </div>`,
      imagePath: '../assets/images/hobbies-page-images/game-image.png' },
    { title: 'Stocks',
      content: '',
      imagePath: '' },
    { title: `<div class="font-Droid-Serif fs-50 fw-b">
              Programming
              </div>`,
      content: `<div class="font-Droid-Serif fs-50">
                    <div>
                      Programming is my job as well as my hobby. During my weekends and holidays, I would try to at least
                      progress a little bit with my projects and discover new frameworks and libraries to use. Most of my
                      projects are centered around visualizing data and aiding users such as myself. For example, LinkMarker
                      was created so that I could visually blacklist Mangas as some of them would have a poor story, but a
                      fantastic cover which baits me into clicking on the link every time a new chapter for that Manga is out.
                    </div>
                </div>`,
      imagePath: '' },
    { title: 'Music',
      content: '',
      imagePath: '../assets/images/hobbies-page-images/music-image.png' },
  ];

  constructor(
    private hobbiesPageService: HobbiesPageService,
    private dialog: MatDialog,
    private contentDialogService: ContentDialogService
  ) { }

  ngOnInit(): void {
    this.backgroundImage = 'url(\'../assets/images/hobbies-page-images/Hobbies-Background.jpg\')';
    this.hobbiesPageService.backgroundImage$
      .subscribe(image =>
        this.backgroundImage = image
      );
    this.hobbiesPageService.contentContainerColor$
      .subscribe(color =>
        this.contentContainerColor = color
      );
  }

  changeBackground(tab) {
    if (tab.index === 0) {
      this.hobbiesPageService.changeImage(this.gamesImage);
      this.hobbiesPageService.changeColor(this.gamesContainerColor);
    } else if (tab.index === 1) {
      this.hobbiesPageService.changeImage(this.animeImage);
      this.hobbiesPageService.changeColor(this.animeContainerColor);
    } else if (tab.index === 2) {
      this.hobbiesPageService.changeImage(this.stockImage);
      this.hobbiesPageService.changeColor(this.stockContainerColor);
    } else {
      this.hobbiesPageService.changeImage(this.musicImage);
      this.hobbiesPageService.changeColor(this.musicContainerColor);
    }
  }

  openDialog(hobby: Hobby) {
    const contentDialogData: ContentDialogData = {
      dialogTitle: hobby.title,
      dialogContent: hobby.content
    }
    this.contentDialogService.openContentDialog(contentDialogData, "50rem");
  }

}
