import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  constructor(
    private lang: LanguageService
  ) { }

  transform(value: string, ...args: unknown[]): any {
    return this.lang.localise(value);
  }

}
