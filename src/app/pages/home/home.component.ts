import { Component } from '@angular/core';
import { NotesComponent } from '../../components/notes/notes.component';
import { SharedModule } from '../../shared/modules/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NotesComponent,
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
