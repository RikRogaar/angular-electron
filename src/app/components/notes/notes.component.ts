import { Component, inject } from '@angular/core';
import { NotesDataService } from './data-access/notes-data.service';
import { SharedModule } from '../../shared/modules/shared.module';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Note } from '../../shared/interfaces/note';
import { NoteComponent } from './ui/note/note.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    SharedModule,
    NoteComponent
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  public notesService = inject(NotesDataService);
  public faEye = faEye;
}
