import { Component } from '@angular/core';
import {TasksService} from '../tasks.service';
import {Task} from '../Task';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-archive',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent {

  taskList: Task[] = [];

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.tasksService.get(true).subscribe(tasks => this.taskList = tasks.slice());
  }

  public delete(task: Task) {
    this.tasksService.deleteTask(task).subscribe(response =>
      this.taskList.splice(this.taskList.findIndex(t => t.id === task.id), 1));
  }
}
