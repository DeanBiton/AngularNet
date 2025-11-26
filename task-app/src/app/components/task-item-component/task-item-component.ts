import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';

@Component({
  selector: 'app-task-item-component',
  standalone: false,
  templateUrl: './task-item-component.html',
  styleUrl: './task-item-component.css',
})
export class TaskItemComponent {
  @Input() task!: TaskItem;

  @Output() toggle = new EventEmitter<TaskItem>();
  @Output() remove = new EventEmitter<number>();

  onToggle() {
    this.toggle.emit(this.task);
  }

  onRemove() {
    this.remove.emit(this.task.id);
  }
}