import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectPath = 'assets/projects.json'

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectPath)
  } 
}
