import { Component, Input, AfterViewChecked } from "@angular/core";
import { ProgressData } from "../data.model";

@Component({
  selector: 'progress-ring',
  templateUrl: './progress-ring.component.html',
  styleUrls: ['./progress-ring.component.scss'],
})
export class ProgressRingComponent implements AfterViewChecked {
  @Input() progressRingData: Array<ProgressData>;
  @Input() progressRingContainerSize: string;
  @Input() progressRingSize: string;
  @Input() ratingFontSize?: string;
  @Input() labelFontSize?: string;
  private progressRingDataCopy: Array<ProgressData>;

  constructor() {}

  ngAfterViewChecked() {
    if(this.progressRingDataCopy != this.progressRingData) {
      this.displayProgressAnimation();
    }
  }

  displayProgressAnimation() {
    const displays = document.querySelectorAll('.progress-circle');
    displays.forEach((display, index) => {
      // Since the DOM displays the new data first before destroying the old data, this block of code ensures that
      // the program wont run into any undefined errors with `this.progressRingData[index]`.
      // To clarify: `displays` will contain both the old Elements and the new Elements instead of just the new Elements
      //              thus its length will be (n * 2) rather than just (n) which leads to index going all the way to (n * 2)
      let trueIndex: number;
      if(displays.length > this.progressRingData.length) {
        trueIndex = index - this.progressRingData.length;
      } else {
        trueIndex = index;
      }
      if(trueIndex < 0) {
        return;
      }

      let progress = display.querySelector('circle');
      let radius = progress.r.baseVal.value;
      let circumference = 2 * Math.PI * radius;
      let offset = circumference * ((10 - (this.progressRingData[trueIndex].rating / 10)) / 10);

      progress.style.setProperty('--transitionDuration', `900ms`);
      progress.style.setProperty('--initialStroke', circumference.toString());

      setTimeout(() => progress.style.strokeDashoffset = offset.toString(), 150);
    });
    this.progressRingDataCopy = this.progressRingData;
  }

  getSize(firstNumber: string, secondNumber: number, operator): string {
    switch(operator) {
      case '+':
        return (Number(firstNumber) + secondNumber).toString();
      case '-':
        return (Number(firstNumber) - secondNumber).toString();
      case '*':
        return (Number(firstNumber) * secondNumber).toString();
      case '/':
        return (Number(firstNumber) / secondNumber).toString();
      case '^':
        return (Number(firstNumber) ^ secondNumber).toString();
    }
  }
}
