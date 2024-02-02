import { Component, inject } from '@angular/core';
import { NotesDataService } from './data-access/notes-data.service';
import { SharedModule } from '../../shared/modules/shared.module';
import { faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  public notesService = inject(NotesDataService);
  public faEye = faEye
}
