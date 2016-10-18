import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
  <h1>New Task</h1>
  <div>
    <label>Enter Task Description:</label>
    <input #newDescription>
  </div>
  <div>
    <label>Enter Category:</label>
    <form required>
      <input #newCategory type="radio" name="category" value="home" [(ngModel)]="category"> Home<br>
      <input #newCategory type="radio" name="category" value="hobby" [(ngModel)]="category"> Hobby<br>
      <input #newCategory type="radio" name="category" value="work" [(ngModel)]="category"> Work
    </form>
  </div>
  <div>
    <label>Enter Task ID:</label>
    <input #newId>
    <button (click)="
        addClicked(newDescription.value, newId.value, newCategory.value);
        newDescription.value='';
        newId.value='';
        newCategory.value='';
      ">Add</button>
  </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number, category: string) {
    var newTaskToAdd: Task = new Task(description, id, category);
    this.newTaskSender.emit(newTaskToAdd);
    console.log(newTaskToAdd);
  }
}
