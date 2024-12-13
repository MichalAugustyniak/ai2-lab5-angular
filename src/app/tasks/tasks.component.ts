import { Component } from '@angular/core';
import {TasksService} from '../tasks.service';
import {Task} from '../Task';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  newTask: Task = {};
  taskList: Task[] = [];

  constructor(private tasksService: TasksService) {
  }

  public addBtnClick(): void {
    this.tasksService.post(this.newTask).subscribe(response => {});
    this.taskList.push(this.newTask);
    this.newTask = {};
  }

  ngOnInit(): void {
    this.tasksService.get().subscribe(tasks => this.taskList = tasks.slice());
  }

  public switchTaskChanged(task: Task): void {
    task.completed = !task.completed;
    this.tasksService.put(task).subscribe(response => {});
  }

  public archiveCompleted(): void {
    for (const task of this.taskList) {
      if (task.completed) {
        task.archived = true;
        this.tasksService.put(task).subscribe(response => {
          let index = this.taskList.findIndex(t => t.id === task.id);
          if (index !== -1) {
            this.taskList.splice(index, 1);
          }
        });
      }
    }
    this.ngOnInit();
  }
}
