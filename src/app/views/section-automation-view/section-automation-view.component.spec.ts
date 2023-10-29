import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAutomationViewComponent } from './section-automation-view.component';

describe('SectionAutomationViewComponent', () => {
  let component: SectionAutomationViewComponent;
  let fixture: ComponentFixture<SectionAutomationViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAutomationViewComponent]
    });
    fixture = TestBed.createComponent(SectionAutomationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
