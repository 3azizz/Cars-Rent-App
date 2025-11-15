import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthSectionComponent } from './fourth-section.component';

describe('FourthSectionComponent', () => {
  let component: FourthSectionComponent;
  let fixture: ComponentFixture<FourthSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthSectionComponent]
    });
    fixture = TestBed.createComponent(FourthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
