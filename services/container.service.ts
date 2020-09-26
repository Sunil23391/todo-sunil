import { Injectable } from '@angular/core';

@Injectable()
export class ContainerService {
  projectList:Project[] = [{
      name: 'Untitled Project',
      taskList: [{
        name: 'Untitled Task',
        description: 'To be description',
        editingNameStatus:false,
        editingDescStatus:false
      }],
      editingStatus:false
    }];
  selectedProject:Project;
  selectedTask:Task;
  constructor() { }
  getProjectList(){
    return this.projectList;
  }

  setSelectedProject(project){
    this.selectedProject = project;
    this.selectedTask = null;
  }

  getSelectedProject(){
    return this.selectedProject;
  }

  setSelectedTask(task){
    this.selectedTask = task;
  }
  getSelectedTask(){
    return this.selectedTask;
  }

}

interface Project{
  name:string,
  editingStatus:boolean,
  taskList:Task[]
}

interface Task{
  name:string,
  description:string,
  editingNameStatus:boolean,
  editingDescStatus:boolean
}