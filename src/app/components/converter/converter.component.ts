import { Component } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {

}
