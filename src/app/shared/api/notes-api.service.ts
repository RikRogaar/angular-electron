import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Note } from '../interfaces/note';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {
  private http = inject(HttpClient);

  constructor() { }

  public index() {
    return of(this.notes);
  }

  private notes: Note[] = [
    {
      id: 1,
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework.',
      isDone: false,
    },
    {
      id: 2,
      title: 'Angular Components',
      description: 'Understand how to create and use components in Angular.',
      isDone: false,
    },
    {
      id: 3,
      title: 'Services and Dependency Injection',
      description: 'Explore services and dependency injection in Angular.',
      isDone: true,
    },
    {
      id: 4,
      title: 'Angular Directives',
      description: 'Master the usage of directives in Angular applications.',
      isDone: false,
    },
    {
      id: 5,
      title: 'Angular Forms',
      description: 'Learn how to work with forms in Angular for user input.',
      isDone: false,
    },
    {
      id: 6,
      title: 'Routing in Angular',
      description: 'Discover how to implement routing in Angular applications.',
      isDone: false,
    },
  ];
}
