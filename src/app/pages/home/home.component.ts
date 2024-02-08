import { Component } from '@angular/core';
import { NotesComponent } from '../../components/notes/notes.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { TodosComponent } from '../../components/todos/todos.component';
import { ConverterComponent } from '../../components/converter/converter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NotesComponent,
    TodosComponent,
    ConverterComponent,
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
