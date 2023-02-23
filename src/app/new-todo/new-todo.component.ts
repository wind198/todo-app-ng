import { Component, OnInit } from '@angular/core';
import { getDefaultTodo } from '../../common/constants';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  newTodoTitle = '';

  handleSubmit() {
    const newTodo = { ...getDefaultTodo(), title: this.newTodoTitle };
    this.todoService.
  }
}
