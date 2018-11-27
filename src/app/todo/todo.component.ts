import { Component, OnInit, Input } from '@angular/core';
import { TodoServerService } from '../todo-server.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  preserveWhitespaces: true
})
export class TodoComponent implements OnInit {

  @Input() todoObj;

  constructor(private todoServer: TodoServerService) { }

  ngOnInit() {
  }

  removeTodo() {
    this.todoServer.deleteTodos(this.todoObj);
  }

  switchDoneFlag() {
    this.todoServer.switchTodoDoneFlag(this.todoObj);
  }

}
