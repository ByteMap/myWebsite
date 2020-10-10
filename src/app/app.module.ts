import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatListModule } from '@angular/material/list';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { HobbiesPageService } from './hobbies-page/hobbies-page.service';
import { SidebarNavigationComponent } from './sidebar-navigation/sidebar-navigation.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HobbiesPageComponent,
    SidebarNavigationComponent,
    ExperiencePageComponent,
    ContentDialogComponent,
    PageHeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    LayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    FontAwesomeModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [
    HobbiesPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
