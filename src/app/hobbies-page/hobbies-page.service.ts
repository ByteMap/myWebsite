import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HobbiesPageService {
  private image = new BehaviorSubject<string>('url(\'../assets/images/hobbies-page-images/Games-Background.jpg\')');
  private color = new BehaviorSubject<string>('#91D6D4');
  backgroundImage$ = this.image.asObservable();
  contentContainerColor$ = this.color.asObservable();

  constructor() { }

  changeImage(newImage) {
    this.image.next(newImage);
  }

  changeColor(newColor) {
    this.color.next(newColor);
  }

}
