import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { SectionProgrammerViewComponent } from './views/section-programmer-view/section-programmer-view.component';
import { SectionIotViewComponent } from './views/section-iot-view/section-iot-view.component';
import { SectionHobbyViewComponent } from './views/section-hobby-view/section-hobby-view.component';
import { SectionAutomationViewComponent } from './views/section-automation-view/section-automation-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'programming', component: SectionProgrammerViewComponent },
  { path: 'iot', component: SectionIotViewComponent },
  { path: 'hobbies', component: SectionHobbyViewComponent },
  { path: 'automation', component: SectionAutomationViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
