import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dynamicSlides = [
    {
      id: 1,
      src:'assets/images/school-1.png',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'assets/images/school-1.png',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'assets/images/school-1.png',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'assets/images/school-1.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'assets/images/school-1.png',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 6,
      src:'assets/images/school-1.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 7,
      src:'assets/images/school-1.png',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 8,
      src:'assets/images/school-1.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 9,
      src:'assets/images/school-1.png',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 10,
      src:'assets/images/school-1.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 11,
      src:'assets/images/school-1.png',
      alt:'Side 5',
      title:'Side 5'
    }
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 4
      },
      760: {
        items: 5
      },
      1000: {
        items: 6
      }
    },
    nav: true
  };
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openCourse(){
    const dialogRef = this.dialog.open(CourseComponent, {
      width: "50%",
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

}
