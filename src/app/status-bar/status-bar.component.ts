import { Input, Component, OnInit } from '@angular/core';
import { ITodoCoreField } from '../../common/types';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css'],
})
export class StatusBarComponent implements OnInit {
  constructor() {}

  @Input()
  todoList: ITodoCoreField[] = [];

  get totalItem() {
    return this.todoList.length;
  }

  get doneItemCount() {
    return this.todoList.filter((i) => i.done).length;
  }
  get notDoneItemCount() {
    return this.todoList.filter((i) => !i.done).length;
  }

  ngOnInit(): void {}
}
