import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { TaskService } from '../../services/task.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-component',
  standalone: false,
  templateUrl: './tasks-component.html',
  styleUrls: ['./tasks-component.css'],
})
export class TasksComponent implements OnInit {
  tasks: TaskItem[] = [];

  form: any;

  constructor(private service: TaskService, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getTasks().subscribe(res => {this.tasks = res; console.log(res);});
  }

  add() {
    if (this.form.invalid) return;

    this.service.addTask(this.form.value).subscribe(() => {
      this.form.reset();
      this.load();
    });
  }

  onToggleTask(task: TaskItem) {
  // create a new object with updated isDone
  const updatedTask = { ...task, isDone: !task.isDone };

  // replace the object in the array
  this.tasks = this.tasks.map(t => t.id === task.id ? updatedTask : t);

  // call API
  this.service.updateTask(updatedTask).subscribe();
}

  onDeleteTask(id: number) {
    this.service.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== id); // creates new array
    });  
  }
}
