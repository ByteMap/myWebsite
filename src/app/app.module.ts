import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FlexLayoutModule, MediaObserver } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from "./home-page/home-page.component";
import { MatListModule } from '@angular/material/list';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { HobbiesPageService } from './hobbies-page/hobbies-page.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { ContentDialogComponent } from "./content-dialog/content-dialog.component";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { ExperiencePageService } from "./experience-page/experience-page.service";
import { ProjectsPageComponent } from "./projects-page/projects-page.component";
import { ProjectsPageService } from "./projects-page/projects-page.service";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatChipsModule } from "@angular/material/chips";
import { first } from "rxjs/operators";
import { MatExpansionModule } from "@angular/material/expansion";
import { TimelineComponent } from "./timeline/timeline.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ProgressRingComponent } from "./progress-ring/progress-ring.component";
import { PageFooterComponent } from "./page-footer/page-footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HobbiesPageComponent,
    ExperiencePageComponent,
    ContentDialogComponent,
    PageHeaderComponent,
    ProjectsPageComponent,
    TimelineComponent,
    ProgressRingComponent,
    PageFooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    FontAwesomeModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatTooltipModule,
    MatChipsModule,
    MatExpansionModule,
    MatProgressBarModule
  ],
  providers: [
    HobbiesPageService,
    ExperiencePageService,
    ProjectsPageService,
    {
      provide: APP_INITIALIZER,
      useFactory: (media: MediaObserver) => {
        return () => {
          return media.asObservable()
            .pipe(first())
            .toPromise();
        };
      },
      multi: true,
      deps: [MediaObserver]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
