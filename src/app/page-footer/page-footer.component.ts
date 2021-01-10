import { Component, OnInit } from "@angular/core";
import { MediaObserver } from "@angular/flex-layout";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {
  gitHubIcon = faGithub;
  linkedInIcon = faLinkedin;

  constructor(
    public mediaObserver: MediaObserver
  ) {}

  ngOnInit() {}
}
