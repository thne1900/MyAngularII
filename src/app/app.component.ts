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
  course:string= "Programmering i TypeScript"
  schoolProgram: string="Webbutvecklingsprogrammet";
  schoolName: string= "thne1900";
  year: number= 2025;
}
