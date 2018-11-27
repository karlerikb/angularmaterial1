import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServerService {

  private todos = [];
  updatedTodos = new Subject();

  constructor() { }

  addTodos(todoText: string, todoDate?: Date) {

    let id = Math.floor((Math.random()*100000)+1);
    let date = todoDate ? todoDate.toDateString() : "";

    this.todos.push({
      id: id,
      body: todoText,
      isDone: false,
      date: date
    });
    this.updatedTodos.next();
  }

  getTodos() {
    return [...this.todos];
  }

  deleteTodos(todoObj) {
    console.log(todoObj);
    this.todos = this.todos.filter(todo => todo.id !== todoObj.id);
    this.updatedTodos.next();
  }

  switchTodoDoneFlag(todoObj) {
    this.todos.forEach(todo => {
      if (todo.id === todoObj.id) {
        todo.isDone = !todo.isDone;
      }
    });
    this.updatedTodos.next();
  }
}
