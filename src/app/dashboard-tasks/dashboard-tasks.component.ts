import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-dashboard-tasks',
  templateUrl: './dashboard-tasks.component.html',
  styleUrls: ['./dashboard-tasks.component.scss']
})
export class DashboardTasksComponent implements OnInit {
@Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
