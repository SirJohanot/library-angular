import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent {

  constructor(
    private _location: Location,
    public languageService: LanguageService
  ) {
  }

  backClicked() {
    this._location.back();
  }
}
