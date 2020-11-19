import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import {HttpClient} from "@angular/common/http";

@Component({
  selector: '.todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})


export class TodoAddComponent implements OnInit {
  public title = '';
  constructor() {};

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.title) {
      this.onCreate.emit(this.title);
      this.title = '';
    }
  };

}
