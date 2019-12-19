import { Injectable } from '@angular/core';

import { Task } from './task';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bid } from 'src/bid';



@Injectable({
  providedIn: 'root'
})
export class AppService {



 //api = 'http://localhost:8080/users';
  //taskapi = 'http://localhost:8080/tasks/task/';
  //bidapi = 'http://localhost:8080/bids/approve/';

    api = 'http://ec2-3-132-52-40.us-east-2.compute.amazonaws.com:8080/users';
  taskapi = 'http://ec2-3-132-52-40.us-east-2.compute.amazonaws.com:8080/tasks/task/';
  bidapi = 'http://ec2-3-132-52-40.us-east-2.compute.amazonaws.com:8080/bids/approve/';
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

  approveBid(bid: Bid): Observable <any> {
    return this.http.post(this.bidapi + bid.id, bid);
  }

  removeTask(taskid: number): Observable <any> {
    return this.http.delete(this.taskapi + taskid);
  }

}
