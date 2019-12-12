import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { User } from '../user';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User = new  User();
  userId: number;
  tempTask: Task = new Task();
  constructor(private services: AppService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.services.getUser(1).subscribe(response => {
      console.log(response);
      this.user = response;
      this.userId = response.uid;
      console.log('current userId', this.userId);
    });
  }

  CreateTask(userId: number, task: Task) {
    this.services.createATask(this.userId, this.tempTask).subscribe(resp => {
      console.log(resp);
      this.getUserInfo();
      this.tempTask = new Task();
    });
  }

}
