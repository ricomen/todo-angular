import { Component, OnInit } from '@angular/core';
import { ToDoHttpService } from "./todo.http.service";
import { NgEventBus } from 'ng-event-bus';

// Api
import { createServer } from "miragejs"
import mockServer from '../mockapi/mockapi';
import {MetaData} from "ng-event-bus/lib/meta-data";

createServer(mockServer);

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public list;

  constructor(
    private toDoService: ToDoHttpService,
    private eventBus: NgEventBus
  ) {};

  ngOnInit(): void {

    this.getList();

    this.eventBus.on('todo-list:add').subscribe((meta:MetaData) => {
      this.onCreate(meta.data);
    });

    this.eventBus.on('todo-list:remove-item').subscribe((meta: MetaData) => {
      this.onDelete(meta.data);
    })
  }

  getList(): void {
    this.toDoService.getList().subscribe(data => {
      this.list = data.todos;
      this.updateList();
    });
  };

  updateList(): void {
    this.eventBus.cast('todo-list', this.list);
  };

  onCreate(todo): void {
    this.toDoService.create(todo).subscribe(todo => {
      this.list.push(todo);
      this.updateList();
    });
  };

  onComplete(id) {

  };

  onDelete(id) {
    this.toDoService.delete(id).subscribe(todo => {
      console.log(todo);
    })
  };
};
