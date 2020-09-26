import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContainerService } from '../services/container.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectList: any;
  selectedProjectIndex: number = -1;
  selectedEditingProject: any;
  selectedEditingProjectIndex: number = -1;
  constructor(private titleService: Title, private containerService: ContainerService) {

  }

  ngOnInit() {
    this.setTitle('Todo App');
    this.projectList = this.containerService.getProjectList();
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  };

  addProject() {

    this.projectList.push({
      name: 'Untitled Project' + ((this.projectList.length) ? ' (' + this.projectList.length + ')' : ''),
      taskList: []
    })
  }

  onEnter(project) {
      project.editingStatus = false;
  }

  editProject(project, index, inputElem, ev) {
    ev.stopPropagation();
    if (this.selectedEditingProject) {
      if (this.selectedEditingProjectIndex != index)
        this.selectedEditingProject.editingStatus = false;
    }

    project.editingStatus = !project.editingStatus;
    setTimeout(function () {
      if ($(inputElem).length)
        $(inputElem).focus().select();
    }, 100);
    this.selectedEditingProject = project;
    this.selectedEditingProjectIndex = index;
  }
  deleteProject(index, ev) {
    ev.stopPropagation();
    this.projectList.splice(index, 1);
  }
  selectProject(project, index) {
    if (this.selectedProjectIndex != index) {
      this.selectedProjectIndex = -1;
      var self = this;
      setTimeout(function () {
        self.containerService.setSelectedProject(project);
        self.selectedProjectIndex = index;
      }, 0);
    }
    else
      this.selectedProjectIndex = -1;
  }
  stopSelection(ev) {
    ev.stopPropagation();
  }
}
