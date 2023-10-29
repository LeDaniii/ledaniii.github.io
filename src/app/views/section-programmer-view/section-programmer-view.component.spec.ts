import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProgrammerViewComponent } from './section-programmer-view.component';

describe('SectionProgrammerViewComponent', () => {
  let component: SectionProgrammerViewComponent;
  let fixture: ComponentFixture<SectionProgrammerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionProgrammerViewComponent]
    });
    fixture = TestBed.createComponent(SectionProgrammerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
