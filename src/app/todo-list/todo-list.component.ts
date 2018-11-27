import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoServerService } from '../todo-server.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  private todoSubscription: Subscription;

  todos;

  constructor(private todoServer: TodoServerService) { }

  ngOnInit() {
    this.todos = this.todoServer.getTodos();
    this.todoSubscription = this.todoServer.updatedTodos.subscribe(() => {
      this.todos = this.todoServer.getTodos();
    });
  }

  ngOnDestroy() {

  }

}
