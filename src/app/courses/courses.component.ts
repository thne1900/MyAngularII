import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { CourseInfo } from '../courseInfo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent {

  courses: CourseInfo[]=[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe((data) => {
      this.courses=data;
  });
  }
  
}


