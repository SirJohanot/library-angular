import { Injectable } from '@angular/core';
import { LOCALES } from '../i18n/locales';
import { messages } from '../i18n/messages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = LOCALES["ENGLISH"];

  constructor() { }

  localise(value: string): any {
    if (messages[this.currentLanguage][value]) {
      return messages[this.currentLanguage][value];
    }
    return value;
  }

  changeLanguage(lang: string) {
    if (LOCALES[lang]) {
      this.currentLanguage = LOCALES[lang];
    }
  }
}
