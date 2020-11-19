import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Api
import { createServer } from "miragejs"
import mockServer from '../mockapi/mockapi';

createServer(mockServer);

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient ) {};

  public items;

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.http.get('https://localhost:4200/api/list')
      .subscribe(data => {
        this.items = data;
      });
  }

  onCreate(title) {
    this.http.post('https://localhost:4200/api/list', {
      body: title
    }).subscribe((res) => {
      this.items.push(res)
    })
  }

}
