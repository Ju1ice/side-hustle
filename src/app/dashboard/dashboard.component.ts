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

  userTasks: Task[] = null;
  constructor(private services: AppService) { }

  ngOnInit() {
    this.userTasks = this.services.getUserTasks(1);
    console.log(this.userTasks);
  }

}
