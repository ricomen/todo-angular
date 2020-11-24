import { Component, Input, OnInit } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { MetaData } from "ng-event-bus/lib/meta-data";

@Component({
  selector: '.list',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  constructor(private eventBus: NgEventBus) {}

  @Input() items;

  ngOnInit(): void {};

  onComplete(id, status): void {
    this.eventBus.cast('todo-list:change-status', {id, status})
  };

  onDelete(id): void {
    this.eventBus.cast('todo-list:remove-item', id)
  };

}
