import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookDto } from 'src/app/interfaces/BookDto';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-book-changes',
  templateUrl: './book-changes.component.html',
  styleUrls: ['./book-changes.component.css']
})
export class BookChangesComponent {

  @Input() book!: BookDto;
  @Input() error!: string;

  @Output() handlBookSubmit = new EventEmitter<BookDto>();

  constructor(
    public languageService: LanguageService
  ) { }

  handleSubmit() {
    this.handlBookSubmit.emit(this.book);
  }

}
