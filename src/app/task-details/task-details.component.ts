import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private service: TaskService) { }

    private taskId: number;
    taskDetail: Task;

  ngOnInit() {
    this.taskId = +this.route.snapshot.queryParamMap.get('taskId');
    console.log('You are in Task Details');
    this.service.taskDetails(this.taskId).subscribe(response => {
      this.taskDetail = response;
  });
  }

}
