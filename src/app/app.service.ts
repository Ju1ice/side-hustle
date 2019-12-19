import { Injectable } from '@angular/core';

import { Task } from './task';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppService {



  api = 'http://localhost:8080/users';
  taskapi = 'http://localhost:8080/tasks/task/';
  constructor(private http: HttpClient) { }

  login(tempUser: User): Observable <any> {
    return this.http.post(this.api, tempUser);
  }

  // get user info for Dashboard
  getUser(id: string): Observable <any> {
    // call api return
    return this.http.get(this.api + '/' + id );
  }

  createATask(userid: string, task: Task): Observable <any> {
    return this.http.post(this.api + '/' + userid + '/task', task);
  }

  updateTask( task: Task): Observable <any> {
    return this.http.post(this.taskapi + 'update/' + task.tid, task);
  }

  removeTask(taskid: number): Observable <any> {
    return this.http.delete(this.taskapi + taskid);
  }

}
