import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { User } from '../user';
import { AppService } from '../app.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  user: User = new  User();
  userId: string;
  tempTask: Task = new Task();
  constructor(private services: AppService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getUserInfo();
    // this.getUserInfoBySession();
  }

  // getUserInfoBySession() {
  //   this.services.getUserBySession().subscribe(resp => {
  //     console.log(resp);
  //     this.user = resp;
  //     // this.userId = resp.uid;
  //     console.log('current userId', this.userId);
  //   });
  // }

  getUserInfo() {
    this.userId = this.cookieService.get('useridfromlogin');
    console.log('id in cookie' + this.userId);
    this.services.getUser(this.userId).subscribe(response => {
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

  RemoveTask(taskid: number) {
    this.services.removeTask(taskid).subscribe(resp => {
      console.log('sucessfully deleted in back-end');
      this.getUserInfo();
    });
  }

}
