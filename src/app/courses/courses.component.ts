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

  //Lista med alla kurser som ska visas utifrån ett interface. 
  courses: CourseInfo[]=[]; //Originallista
  filteredCourses: CourseInfo[]=[]; //Filtrerad lista

  //Variabler för sorteringen
  searchCourse:string=""; //Texten som skrivs in för att kunna filtrera i kurslistan. 
  sortBy: string="course"; // Kolumn som ska sorteras.
  sortOrder:boolean=true; //Ordningen på sorteringen. 

  constructor(private coursesService: CoursesService) {}

  //Inhämtar kurserna(datan) när komponenten körs. 
  ngOnInit() {
    this.coursesService.getCourses().subscribe((data) => {
      this.courses=data;
      this.filterText();
      this.filteredCourses=this.courses.slice();
  });
  }

  //Funktion som sorterar listan på aktuellt fält med ordningsföljd. 
    sortCourses(){
      this.filteredCourses.sort((a, b)=>{
        const valueA=a[this.sortBy as keyof CourseInfo].toLowerCase();
        const valueB=b[this.sortBy as keyof CourseInfo].toLowerCase();

        if(valueA<valueB) return this.sortOrder?-1:1;
        if(valueA>valueB) return this.sortOrder?1:-1;
        return 0;
      });
    }

  //Funktion som sorterar listan utifrån vilken column som klickas på. 
  sortToggle(column:string) {
    if(this.sortBy===column){
      this.sortOrder=!this.sortOrder;
    }else{
      this.sortBy=column;
      this.sortOrder=true;
    }
    this.sortCourses();
    }

  //Funktion som baserat på sökfrasen filtrerar kurslistan. 
  filterText() {
    const filterObj= this.searchCourse.toLowerCase();

    this.filteredCourses=this.courses.filter(course=> course.code.toLowerCase().includes(filterObj)||
    course.coursename.toLowerCase().includes(filterObj)
);
this.sortCourses();
    }

  }



