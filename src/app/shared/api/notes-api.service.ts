import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from '../../../db';
import { from } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {
  constructor() { }

  public index() {
    return from(liveQuery(() => db.notes.toArray()));
  }
}
