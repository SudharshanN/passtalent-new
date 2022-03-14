import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgCourseComponent } from './pg-course.component';

describe('PgCourseComponent', () => {
  let component: PgCourseComponent;
  let fixture: ComponentFixture<PgCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
