import { Component, Input, inject } from '@angular/core';
import { Note } from '../../../../shared/interfaces/note';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { NotesDataService } from '../../data-access/notes-data.service';
import { ElectronService } from '../../../../shared/electron/electron.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    SharedModule,
  ],
  providers: [
    ElectronService
  ],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;

  public notesService = inject(NotesDataService);
  public electronService = inject(ElectronService);
  public isOpen: boolean = false;
  @Input() note?: Note;

  public showTodo() {
    window.open('https://github.com', "_blank");
  }
}
