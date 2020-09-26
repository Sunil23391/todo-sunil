import { Component, OnInit } from '@angular/core';
import { ContainerService } from '../../services/container.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  project: any;
  taskList: any;
  selectedTaskIndex: number = -1;
  selectedTask: any;

  constructor(private containerService: ContainerService) {

  }

  ngOnInit() {
    this.project = this.containerService.getSelectedProject();
    this.selectedTask = this.containerService.getSelectedTask();
    console.log(this.selectedTask);
    this.taskList = this.project.taskList;
  }
  addTask() {
    if (this.taskList.length)
      var taskNameInit = 'Untitled Task' + " (" + this.taskList.length + ")";
    else
      var taskNameInit = 'Untitled Task';

    this.taskList.push({
      name: taskNameInit,
      description: 'To be description'
    });
  }
  selectTask(index, task) {
    if (this.selectedTaskIndex != index) {
      var self = this;
      self.selectedTaskIndex = -1;
      setTimeout(function () {
        self.containerService.setSelectedTask(task);
        self.selectedTaskIndex = index;
        self.selectedTask = task;
      }, 0);
    } else {
      this.selectedTaskIndex = -1;
    }
  }


  /* Select Feature */
  allSelect: boolean = false;
  checkTask(task, ev) {
    ev.stopPropagation();
    this.selectedTaskIndex = -1;
    task.check = !task.check;
    var totalChecked = 0;
    this.taskList.forEach(function (item) {
      if (item.check)
        totalChecked++;
    });
    if (totalChecked == this.taskList.length)
      this.allSelect = true;
    else
      this.allSelect = false;
  }

  checkAllTask() {
    this.selectedTaskIndex = -1;
    var status = this.allSelect = !this.allSelect;
    this.taskList.forEach(function (item) {
      item.check = status;
    });
  }

  /* Delete Feature */
  deleteTask(){
    var self = this;
    if(this.allSelect){
      this.taskList = [];
      this.allSelect = false;
      return;
    }
    this.taskList = this.taskList.filter(function(item,index){
      if(item.check){
        item.check = false;
      }else{
        return true;
      }
      
    });
    this.allSelect = false;
  }

}