import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProjectsPageComponent } from "./projects-page/projects-page.component";


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'my-hobbies',
    component: HobbiesPageComponent,
    data: { animation: 'hobbiesPage' }
  },
  {
    path: 'my-experience',
    component: ExperiencePageComponent,
    data: { animation: 'experiencePage' }
  },
  {
    path: 'my-projects',
    component: ProjectsPageComponent,
    data: { animation: 'projectsPage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'})],
  exports: [RouterModule]
})
export class
AppRoutingModule { }
