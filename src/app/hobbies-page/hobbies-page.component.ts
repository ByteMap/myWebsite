import { Component, OnInit } from '@angular/core';
import { HobbiesPageService } from './hobbies-page.service';


@Component({
  selector: 'app-hobbies-page',
  templateUrl: './hobbies-page.component.html',
  styleUrls: ['./hobbies-page.component.scss'],
})
export class HobbiesPageComponent implements OnInit {
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

  constructor(private hobbiesPageService: HobbiesPageService) { }

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

}
