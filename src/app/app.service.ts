import { Injectable } from '@angular/core';
import { Task } from './task';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  tempTasks: Task[] = [];
  constructor() { }


}
