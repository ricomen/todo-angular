import { Component, Input, OnInit } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { MetaData } from "ng-event-bus/lib/meta-data";

@Component({
  selector: '.todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  constructor(private eventBus: NgEventBus) {};
  public items: [{}];

  ngOnInit(): void {
    this.eventBus.on('todo-list').subscribe((meta:MetaData) => {
      this.items = meta.data;
    });
  };

}
