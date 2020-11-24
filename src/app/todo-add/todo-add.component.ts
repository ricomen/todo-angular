import { Component, OnInit } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { MetaData } from "ng-event-bus/lib/meta-data";

@Component({
  selector: '.todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})


export class TodoAddComponent implements OnInit {
  public title: string;

  constructor(private eventBus: NgEventBus) {};

  // @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.title) {
      // this.onCreate.emit(this.title);
      this.eventBus.cast('todo-list:add', this.title);
    }
    this.title = '';
  };

};
