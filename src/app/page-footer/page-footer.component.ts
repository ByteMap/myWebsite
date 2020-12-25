import { Component, OnInit } from "@angular/core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {
  gitHubIcon = faGithub;
  linkedInIcon = faLinkedin;

  ngOnInit() {}
}
