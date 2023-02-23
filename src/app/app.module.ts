import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapTrash } from '@ng-icons/bootstrap-icons';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TodoService } from './todo.service';
@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoItemComponent,
    StatusBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ bootstrapTrash }),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
