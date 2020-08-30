import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'my-hobbies',
    component: HobbiesPageComponent
  },
  {
    path: 'my-experience',
    component: ExperiencePageComponent,
    data: { animation: 'experiencePage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
