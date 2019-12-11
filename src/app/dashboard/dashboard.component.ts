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

  constructor(private services: AppService) { }

  ngOnInit() {
  }

}
