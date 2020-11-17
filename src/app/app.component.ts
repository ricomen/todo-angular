import { Component, OnInit } from '@angular/core';

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
  constructor() {};

  ngOnInit(): void {

  };

}
