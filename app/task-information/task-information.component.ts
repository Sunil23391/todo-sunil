import { Component, OnInit } from '@angular/core';
import { ContainerService } from '../../services/container.service';

@Component({
  selector: 'task-information',
  templateUrl: './task-information.component.html',
  styleUrls: ['./task-information.component.css']
})
export class TaskInformationComponent implements OnInit {
  task:any;
  taskNameFocOnce:boolean = false;
  taskDescFocOnce:boolean = false;
  constructor(private containerService: ContainerService) { }

  ngOnInit() {
    this.task = this.containerService.getSelectedTask();
  }

  onTaskNameFocus(inp){
    if(!this.taskNameFocOnce){
      inp.value = '';
      this.taskNameFocOnce=true;
    }
    inp.select(); 
  }

  onTaskDescFocus(inp){
    if(!this.taskDescFocOnce){
      inp.value = '';
      this.taskDescFocOnce=true;
    }
    inp.select();
  }

  onNameEnter(value){
    this.task.name = value;
  }

  
  onDescEnter(value){
    this.task.description = value;
  }
}