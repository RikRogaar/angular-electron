import { Injectable, computed, inject, signal } from '@angular/core';
import { BehaviorSubject, concat, map, merge, of, startWith, switchMap, tap } from 'rxjs';
import { connect } from 'ngxtension/connect';
import { Status } from '../../../shared/enums/status';
import { Todo } from '../../../shared/interfaces/todo';
import { TodosApiService } from '../../../shared/api/todos-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {
  private readonly todosPerPage: number = 5;

  // selectors
  public todos = computed(() => this.state().todos);
  public todosCount = computed(() => this.state().totalTodos);
  public totalPages = computed(() => Math.ceil(this.todosCount() / this.todosPerPage));
  public currentPage = new BehaviorSubject<number>(1);
  public status = computed(() => this.state().status);

  private apiService = inject(TodosApiService);
  // state
  private state = signal<todoState>({
    todos: [],
    totalTodos: 0,
    status: Status.LOADING
  });

  // sources
  private todos$ = this.apiService.index().pipe(
    switchMap((todos) => of(todos.length))
  );

  private paginatedTodos$ = this.currentPage.pipe(
    switchMap((page) => this.apiService.index().pipe(
        startWith([]),
        map((todos) => {
          const currentItemStart = (page - 1) * 5;

          return todos.slice(currentItemStart, currentItemStart + this.todosPerPage)
        })
      )
    ),
  );

  constructor() {
    // reducers
    const nextTodos$ = merge(
      this.todos$.pipe(
        map((todoCount) => ({
          totalTodos: todoCount,
        }))
      ),
      this.paginatedTodos$.pipe(
        map((todos) => ({
          todos: todos,
          status: Status.SUCCESS
        }))
      )
    );

    connect(this.state)
      .with(nextTodos$);
  }

  public nextPage() {
    this.currentPage.next(this.currentPage.value + 1);
  }

  public previousPage() {
    this.currentPage.next(this.currentPage.value - 1);
  }
}

interface todoState {
  todos: Todo[];
  totalTodos: number;
  status: Status;
}