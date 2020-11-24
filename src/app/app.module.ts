import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from "@angular/forms";
import { NgEventBus } from "ng-event-bus";

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    NgEventBus
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
