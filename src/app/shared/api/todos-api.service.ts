import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { from } from 'rxjs';
import { db } from '../../../db';

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {
  constructor() { }

  public index() {
    return from(liveQuery(() => db.todos.toArray()));
  }
}
