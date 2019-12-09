import { Injectable } from '@angular/core';
import { Data } from './mock-data';
import { Task } from './task';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  mockdata: Data = new Data ();
  tempTasks: Task[] = [];
  constructor() { }

  getUserTasks(id: number): Task[] {
    this.mockdata.tasks.forEach(element => {
      if (element.userid == id) {
        this.tempTasks.push(element);
      }
    });
    return this.tempTasks;
  }
}
