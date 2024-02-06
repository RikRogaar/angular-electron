import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../../components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CardComponent,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    CardComponent,
    FontAwesomeModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
