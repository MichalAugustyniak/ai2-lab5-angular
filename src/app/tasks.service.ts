import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from './Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }

  public get(archived = false): Observable<Task[]> {
    return this.httpClient.get<Task[]>('https://lab13.zecer.wi.zut.edu.pl/api/am50923?archived=' + archived);
  }

  public post(task: Task): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.httpClient.post('https://lab13.zecer.wi.zut.edu.pl/api/am50923', task, options);
  }

  public put(task: Task): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.httpClient.put('https://lab13.zecer.wi.zut.edu.pl/api/am50923/' + task.id, task, options);
  }

  public deleteTask(task: Task): Observable<any> {
    return this.httpClient.delete('https://lab13.zecer.wi.zut.edu.pl/api/am50923/' + task.id);
  }
}
