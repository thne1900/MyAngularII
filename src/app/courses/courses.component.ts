import { Component } from '@angular/core';
import { CoursesService } from '../Service/courses.service';
import { CourseInfo } from '../Model/courseInfo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent {

  //List of all courses to be displayed from an interface. 
  courses: CourseInfo[]=[]; //Original list.
  filteredCourses: CourseInfo[]=[]; //Filtrered list.

  //Sorting variables
  searchCourse:string=""; //The text entered to filter the course list. 
  sortBy: string="course"; //Column to sort.
  sortOrder:boolean=true; //The order of the sorting.

  constructor(private coursesService: CoursesService) {}

  //Retrieves courses (the data) when the component runs.
  ngOnInit() {
    this.coursesService.getCourses().subscribe((data) => {
      this.courses=data;
      this.filterText();
      this.filteredCourses=this.courses.slice();
    });
  }

  //Function that sorts the list by the current field in order.
    sortCourses(){
      this.filteredCourses.sort((a, b)=>{
        const valueA=a[this.sortBy as keyof CourseInfo].toLowerCase();
        const valueB=b[this.sortBy as keyof CourseInfo].toLowerCase();

        if(valueA<valueB) return this.sortOrder?-1:1;
        if(valueA>valueB) return this.sortOrder?1:-1;
        return 0;
      });
    }

  //Function that sorts the list based on which column is clicked. 
  sortToggle(column:string) {
    if(this.sortBy===column){
      this.sortOrder=!this.sortOrder;
    }else{
      this.sortBy=column;
      this.sortOrder=true;
    }
    this.sortCourses();
    }

  //Function that filters the course list based on the search phrase.
  filterText() {
    const filterObj= this.searchCourse.toLowerCase();

    this.filteredCourses=this.courses.filter(course=> course.code.toLowerCase().includes(filterObj)||
    course.coursename.toLowerCase().includes(filterObj)
);
this.sortCourses();
    }
  }



