import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHobbyViewComponent } from './section-hobby-view.component';

describe('SectionHobbyViewComponent', () => {
  let component: SectionHobbyViewComponent;
  let fixture: ComponentFixture<SectionHobbyViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionHobbyViewComponent]
    });
    fixture = TestBed.createComponent(SectionHobbyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
