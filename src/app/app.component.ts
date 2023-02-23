import { Component } from '@angular/core';
import { getDefaultTodo, MockTodoList } from '../common/constants';
import { ITodoCoreField } from '../common/types';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private totoService: TodoService) {
    this.totoService.todoListObservable.subscribe((data) => {
      this._todoList = data;
    });
  }

  private _todoList = [] as ITodoCoreField[];
  get todoList() {
    return this._todoList;
  }
}
