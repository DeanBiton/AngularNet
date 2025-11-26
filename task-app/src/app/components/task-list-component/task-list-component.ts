import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';

@Component({
  selector: 'app-task-list-component',
  standalone: false,
  templateUrl: './task-list-component.html',
  styleUrls: ['./task-list-component.css'],
})
export class TaskListComponent {
  
  @Input() tasks: TaskItem[] = [];

  @Output() toggleTask = new EventEmitter<TaskItem>();
  @Output() deleteTask = new EventEmitter<number>();

  onToggle(task: TaskItem) {
    this.toggleTask.emit(task);
  }

  onDelete(id: number) {
    this.deleteTask.emit(id);
  }
}