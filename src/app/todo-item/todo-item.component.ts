import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: '.list',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  @Input() items;

  ngOnInit(): void {};

  onCompleted(id, status): void {
    console.log(id, status)
  }

  onRemove(id):void {

  }

}
