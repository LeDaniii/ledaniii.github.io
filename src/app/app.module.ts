import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './views/main/main.component';
import { SectionProgrammerViewComponent } from './views/section-programmer-view/section-programmer-view.component';
import { SectionAutomationViewComponent } from './views/section-automation-view/section-automation-view.component';
import { SectionHobbyViewComponent } from './views/section-hobby-view/section-hobby-view.component';
import { SectionIotViewComponent } from './views/section-iot-view/section-iot-view.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    SectionProgrammerViewComponent,
    SectionAutomationViewComponent,
    SectionHobbyViewComponent,
    SectionIotViewComponent,
    UnderConstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
