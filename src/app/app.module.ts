import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTodoComponent } from './new-todo/new-todo.component';

@NgModule({
  declarations: [AppComponent, NewTodoComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
