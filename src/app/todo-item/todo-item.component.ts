import {
  ViewChild,
  Output,
  EventEmitter,
  Component,
  Input,
  OnInit,
  ElementRef,
} from '@angular/core';
import { ITodoCoreField } from '../../common/types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements ITodoCoreField, OnInit {
  constructor() {}
  @Input()
  id!: string;
  @Input()
  title!: string;
  @Input()
  done!: boolean;
  @Input()
  createdAt!: Date;
  @Input()
  index!: number;

  ngOnInit(): void {}

  @Output()
  toggleDone = new EventEmitter<void>();

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  update = new EventEmitter<Partial<ITodoCoreField>>();

  isEditting = false;

  @ViewChild('editTitleInputField')
  inputField: ElementRef<HTMLImageElement> | undefined;

  toggleEditting() {
    this.isEditting = !this.isEditting;
    setTimeout(() => {
      console.log(
        '🚀 ~ file: todo-item.component.ts:47 ~ TodoItemComponent ~ setTimeout ~ inputField:',
        this.inputField
      );
      this.inputField?.nativeElement.focus();
    }, 0);
  }

  toggleDoneThisItem() {
    this.toggleDone.emit();
  }
  deleteThisItem() {
    this.delete.emit();
  }

  updateTitleThisItem(newTitle: string) {
    this.update.emit({ title: newTitle });
  }
}
