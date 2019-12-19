import { Component, OnInit, Input} from '@angular/core';
import { Task } from '../task';
import { User } from '../user';
import { AppService } from '../app.service';
import { CookieService } from 'ngx-cookie-service';
import { BidService } from '../bid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { DashboardTasksComponent } from '../dashboard-tasks/dashboard-tasks.component';
import { Bid } from 'src/bid';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() nav: NavComponent;

  user: User = new  User();
  userId: string;
  taskid: number;
  tempTask: Task = new Task();
  task: Task = new Task();
  islogin: boolean;
  formShow = false;
  buttonName = 'Update Task';
  constructor(private services: AppService, private cookieService: CookieService, private bidservice: BidService, private router: Router) { }

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
    this.islogin = this.cookieService.check('useridfromlogin');

    console.log('is the user login', this.islogin);
    if (this.islogin) {
      this.userId = this.cookieService.get('useridfromlogin');
      console.log('id in cookie' + this.userId);
      this.services.getUser(this.userId).subscribe(response => {
      console.log(response);
      this.user = response;

      this.userId = response.uid;
      console.log('current userId', this.userId);

    }); } else {
      this.router.navigate(['/login']);
    }
  }

  CreateTask(userId: number, task: Task) {
    this.services.createATask(this.userId, this.tempTask).subscribe(resp => {
      console.log(resp);
      this.getUserInfo();
      this.tempTask = new Task();
    });

  }

    RemoveBid(bidid: number) {
    this.bidservice.removeBid(bidid).subscribe(resp => {
      console.log('bid is sucessfully deleted in back-end');
      this.getUserInfo();
    });
  }

  RemoveTask(taskid: number) {
    this.services.removeTask(taskid).subscribe(resp => {
      console.log('sucessfully deleted in back-end');
      this.getUserInfo();
    });
  }
updateTask(task: Task) {
  console.log('This is task updating22222....' + JSON.stringify(task));
  // console.log('This is task updating....' + JSON.stringify(this.user.tasks[1]));
  this.services.updateTask(task).subscribe(resp => {
      console.log(resp);
      this.getUserInfo();
      task = new Task();
    });
}

approveBid(bid: Bid){
  console.log('Bid Approved:' + bid.bapproved);
  this.services.approveBid(bid).subscribe(resp => {
      console.log(resp);
      this.getUserInfo();
      bid = new Bid();
    });
}
}
