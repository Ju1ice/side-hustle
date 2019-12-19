import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { AppService } from '../app.service';


@Component({
  selector: 'app-dashboard-tasks',
  templateUrl: './dashboard-tasks.component.html',
  styleUrls: ['./dashboard-tasks.component.scss']
})
export class DashboardTasksComponent implements OnInit {
@Input() user: User;
  constructor(private services: AppService) { }

  ngOnInit() {
  }


}
