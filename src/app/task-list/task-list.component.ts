import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
listOfTasks: Task[] = [];

  constructor(private service: TaskService) { }

  ngOnInit() {
    console.log('You are in init');
    this.service.list().subscribe(response => {
  this.listOfTasks = response;
  console.log('Response Data' + response.data);
});
  }


}
