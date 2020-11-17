import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: '.todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  constructor(private http: HttpClient) {

  };

  list: any;

  ngOnInit(): void {
    console.log(this.list)

    this.getList();
  }

  getList() {
    // this.http.get('https://jsonplaceholder.typicode.com/todos')
    this.http.get('https://localhost:4200/api/list', {responseType:'json'})
      .subscribe(data => {
        this.list = data;
        console.log(this.list);
      });

  }

  onCreate(): void {
    // if(this.title) {
    //   this.http.post('https://jsonplaceholder.typicode.com/todos', {
    //     title: this.title
    //   })
    //     .subscribe(todo => {
    //       this.list.push(todo);
    //     });
    // }
  };

  onRemove(): void {}

  onCompleted(): void {}

}
