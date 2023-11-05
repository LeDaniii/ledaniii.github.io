import { Component } from '@angular/core';

@Component({
  selector: 'app-section-programmer-view',
  templateUrl: './section-programmer-view.component.html',
  styleUrls: ['./section-programmer-view.component.scss'],
})
export class SectionProgrammerViewComponent {

  mainHeaderClass: string = 'js-background';
  headerIconClass: string = 'js';

  chooseLanguage(language: string): void {
    this.mainHeaderClass = `${language}-background`;
    this.headerIconClass = language;
  }
}
