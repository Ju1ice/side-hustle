import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { BidModalComponent } from '../bid-modal/bid-modal.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private service: TaskService) { }

    private taskId: number;
    taskDetail: Task;
    imageUrl: string;

  ngOnInit() {
    this.taskId = +this.route.snapshot.queryParamMap.get('taskId');
    console.log('You are in Task Details');
    this.service.taskDetails(this.taskId).subscribe(response => {
      this.taskDetail = response;


      this.service.showImage(this.taskDetail.tcity).subscribe(response2 => {
        console.log('Response Image: ' + response2.photos[0].image.web);
        this.imageUrl = response2.photos[0].image.web;
        console.log ('This is image response ' + response2.photos[0].image.web);
  }, error =>{
           // tslint:disable-next-line: max-line-length
           this.imageUrl = 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80';
    }
  );

  });



}}
