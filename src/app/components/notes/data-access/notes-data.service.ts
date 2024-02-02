import { Injectable, computed, inject, signal } from '@angular/core';
import { NotesApiService } from '../../../shared/api/notes-api.service';
import { Note } from '../../../shared/interfaces/note';
import { Subject, map } from 'rxjs';
import { connect } from 'ngxtension/connect';
import { Status } from '../../../shared/enums/status';

@Injectable({
  providedIn: 'root'
})
export class NotesDataService {
  // selectors
  public notes = computed(() => this.state().notes);
  public notesCount = computed(() => this.state().notes.length);
  public selectNote$ = new Subject<number>();
  public status = computed(() => this.state().status);

  private apiService = inject(NotesApiService);
  // state
  private state = signal<noteState>({
    notes: [],
    status: Status.LOADING
  });

  // sources
  private todos$ = this.apiService.index();

  constructor() {
    // reducers
    const nextTodos$ = this.todos$.pipe(
      map((notes) => ({
        notes: notes,
        status: Status.SUCCESS
      }))
    );

    connect(this.state)
      .with(nextTodos$);
  }
}

interface noteState {
  notes: Note[];
  status: Status;
}