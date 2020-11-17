import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: '.list',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  @Input() list;
  // @ViewChild()

  ngOnInit(): void {};

}
