import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  newTodoTitle = '';

  handleSubmit() {
    console.log('submit',this.newTodoTitle);

    alert(this.newTodoTitle);
  }
}
