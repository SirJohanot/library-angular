import { Component, Input } from '@angular/core';
import { Book } from 'src/app/Book';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-book-parameters',
  templateUrl: './book-parameters.component.html',
  styleUrls: ['./book-parameters.component.css']
})
export class BookParametersComponent {

  @Input() book!: Book;

  constructor(
    public languageService: LanguageService
  ) { }

}
