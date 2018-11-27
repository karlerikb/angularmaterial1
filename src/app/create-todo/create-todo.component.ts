import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Subscription } from 'rxjs';
import { TodoServerService } from '../todo-server.service';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todoDate;

  constructor(private todoServer: TodoServerService) { }

  ngOnInit() {
  }

  createNewTodo(formObj) {
    if (formObj.value.todoText !== "") {
      //console.log(formObj.value.todoText);
      this.todoServer.addTodos(formObj.value.todoText, this.todoDate);
      //console.log(this.todoServer.getTodos());
    }
    console.log(formObj);
  }


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //console.log(type, event.value);
    this.todoDate = event.value;
    console.log(this.todoDate);
  }

}
