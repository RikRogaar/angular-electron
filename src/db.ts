import Dexie, { Table } from 'dexie';
import { Note } from './app/shared/interfaces/note';
import { Todo } from './app/shared/interfaces/todo';

export class AppDB extends Dexie {
  notes!: Table<Note, number>;
  todos!: Table<Todo, number>;

  constructor() {
    super('ae-17');
    this.version(4).stores({
      notes: '++id',
      todos: '++id',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    await this.notes.bulkAdd([
      {
        id: 1,
        title: 'Introduction to Angular',
        description: 'Learn the basics of Angular framework.'
      },
      {
        id: 2,
        title: 'Angular Components',
        description: 'Understand how to create and use components in Angular.'
      },
      {
        id: 3,
        title: 'Services and Dependency Injection',
        description: 'Explore services and dependency injection in Angular.'
      },
      {
        id: 4,
        title: 'Angular Directives',
        description: 'Master the usage of directives in Angular applications.'
      },
      {
        id: 5,
        title: 'Angular Forms',
        description: 'Learn how to work with forms in Angular for user input.'
      },
      {
        id: 6,
        title: 'Routing in Angular',
        description:
          'Discover how to implement routing in Angular applications.'
      },
    ]);

    await this.todos.bulkAdd([
      {
        id: 1,
        title: 'Learn Angular Basics',
        description: 'Explore the fundamentals of Angular framework.',
        deadline: '2024-02-15',
        isDone: false,
      },
      {
        id: 2,
        title: 'Build a Todo App in Angular',
        description: 'Create a simple Todo application using Angular.',
        deadline: '2024-02-20',
        isDone: false,
      },
      {
        id: 3,
        title: 'Study Angular Components',
        description: 'Deep dive into Angular components and their lifecycle.',
        deadline: '2024-02-25',
        isDone: false,
      },
      {
        id: 4,
        title: 'Explore Angular Directives',
        description: 'Understand and use Angular directives in projects.',
        deadline: '2024-03-01',
        isDone: false,
      },
      {
        id: 5,
        title: 'Master Angular Services',
        description: 'Learn how to create and use services in Angular.',
        deadline: '2024-03-10',
        isDone: false,
      },
      {
        id: 6,
        title: 'Implement Angular Routing',
        description: 'Set up routing for navigation in Angular applications.',
        deadline: '2024-03-15',
        isDone: false,
      },
      {
        id: 7,
        title: 'Understand Angular Forms',
        description: 'Explore form handling and validation in Angular.',
        deadline: '2024-03-20',
        isDone: false,
      },
      {
        id: 8,
        title: 'Integrate Angular with APIs',
        description: 'Learn how to fetch and send data to APIs in Angular.',
        deadline: '2024-03-25',
        isDone: false,
      },
      {
        id: 9,
        title: 'Testing Angular Applications',
        description: 'Master the art of testing Angular components and services.',
        deadline: '2024-04-01',
        isDone: false,
      },
      {
        id: 10,
        title: 'Deploy Angular App',
        description: 'Deploy an Angular application to a hosting platform.',
        deadline: '2024-04-10',
        isDone: false,
      },
    ]);
  }
}

export const db = new AppDB();
