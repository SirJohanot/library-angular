import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.css']
})
export class MissingComponent {

  constructor(
    private _location: Location,
    public languageService: LanguageService
  ) {
  }

  backClicked() {
    this._location.back();
  }

}
