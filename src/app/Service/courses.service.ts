import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseInfo } from '../Model/courseInfo';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private url:string ="https://webbutveckling.miun.se/files/ramschema.json";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<CourseInfo[]> {
    return this.http.get<CourseInfo[]>(this.url);
  }
}
