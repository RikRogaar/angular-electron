import Dexie, { Table } from 'dexie';
import { Note } from './app/shared/interfaces/note';

export class AppDB extends Dexie {
  notes!: Table<Note, number>;

  constructor() {
    super('ae-17');
    this.version(3).stores({
      notes: '++id',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    await this.notes.bulkAdd([
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
        description:
          'Discover how to implement routing in Angular applications.',
        isDone: false,
      },
    ]);
  }
}

export const db = new AppDB();
