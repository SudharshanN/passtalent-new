import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GCourseComponent } from './g-course.component';

describe('GCourseComponent', () => {
  let component: GCourseComponent;
  let fixture: ComponentFixture<GCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
