import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIotViewComponent } from './section-iot-view.component';

describe('SectionIotViewComponent', () => {
  let component: SectionIotViewComponent;
  let fixture: ComponentFixture<SectionIotViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionIotViewComponent]
    });
    fixture = TestBed.createComponent(SectionIotViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
