import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProjectsPageComponent } from "./projects-page/projects-page.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: { animation: 'homePage' }
  },
  {
    path: 'my-hobbies',
    component: HobbiesPageComponent
  },
  {
    path: 'my-experience',
    component: ExperiencePageComponent,
    data: { animation: 'experiencePage' }
  },
  {
    path: 'my-projects',
    component: ProjectsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class
AppRoutingModule { }
