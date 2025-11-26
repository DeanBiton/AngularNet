import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskItem } from '../models/task-item.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api = 'https://localhost:7150/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskItem[]> {
    return this.http.get<TaskItem[]>(this.api);
  }

  addTask(task: Partial<TaskItem>) {
    return this.http.post(this.api, task);
  }

  updateTask(task: TaskItem) {
    return this.http.put(`${this.api}/${task.id}`, task);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
