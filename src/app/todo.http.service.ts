import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class ToDoHttpService {
  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get('https://localhost:4200/api/list');
  };

  create(body): Observable<any> {
    return this.http.post('https://localhost:4200/api/list', { body });
  };

  patch(todo): Observable<any> {
    return this.http.patch('https://localhost:4200/api/list/' + todo.id,  { completed: todo.status });
  };

  delete(id): Observable<any> {
    return this.http.delete('https://localhost:4200/api/list/' + id);
  };

};
