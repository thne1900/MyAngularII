import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularII';

  //Variables in the footer.
  currentCourse:string= "Programmering i TypeScript"
  schoolProg: string="Webbutvecklingsprogrammet";
  schoolId: string= "thne1900";
  schoolYear: number= 2025;
}
