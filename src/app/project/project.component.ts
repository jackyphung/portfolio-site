import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = []

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects() {
    this.projectService.getProjects()
        .subscribe(projects => this.projects = projects)
  }
}
