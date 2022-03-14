import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgCourseComponent } from './ug-course.component';

describe('UgCourseComponent', () => {
  let component: UgCourseComponent;
  let fixture: ComponentFixture<UgCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UgCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
