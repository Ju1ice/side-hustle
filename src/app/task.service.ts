import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
url = `http://localhost:8080`;
  listOfTasks: Task[] = [];

  list(): Observable <any> {
    return this.http.get(this.url + '/tasks');
  }

  taskDetails(tid: number): Observable <any> {
    return this.http.get(this.url + '/tasks/task/' + tid);
  }



}
