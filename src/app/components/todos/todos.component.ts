import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { TodosDataService } from './data-access/todos-data.service';
import { TodoComponent } from './ui/todo/todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    TodoComponent,
    SharedModule
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  public todosService = inject(TodosDataService);
}