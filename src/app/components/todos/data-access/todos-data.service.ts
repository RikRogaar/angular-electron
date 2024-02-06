import { Injectable, computed, inject, signal } from '@angular/core';
import { map } from 'rxjs';
import { connect } from 'ngxtension/connect';
import { Status } from '../../../shared/enums/status';
import { Todo } from '../../../shared/interfaces/todo';
import { TodosApiService } from '../../../shared/api/todos-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {
  // selectors
  public todos = computed(() => this.state().todos);
  public todosCount = computed(() => this.state().todos.length);
  public status = computed(() => this.state().status);
  // public selectNote$ = new Subject<number>();

  private apiService = inject(TodosApiService);
  // state
  private state = signal<todoState>({
    todos: [],
    status: Status.LOADING
  });

  // sources
  private todos$ = this.apiService.index();

  constructor() {
    // reducers
    const nextTodos$ = this.todos$.pipe(
      map((todos) => ({
        todos: todos,
        status: Status.SUCCESS
      }))
    );

    connect(this.state)
      .with(nextTodos$);
  }
}

interface todoState {
  todos: Todo[];
  status: Status;
}