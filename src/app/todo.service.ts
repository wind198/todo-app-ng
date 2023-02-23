import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodoCoreField } from '../common/types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  private _todoList = new BehaviorSubject<ITodoCoreField[]>([]);

  private get currentTodoList() {
    return this._todoList.getValue();
  }

  private set setTodoList(v: ITodoCoreField[]) {
    this._todoList.next(v);
  }

  get todoListObservable() {
    return this._todoList.asObservable();
  }

  addTodo(todo: ITodoCoreField) {
    const newTodoList = this.currentTodoList;
    newTodoList.push(todo);
    this._todoList.next(newTodoList);
  }
}
