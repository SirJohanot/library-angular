import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authors'
})
export class AuthorsPipe implements PipeTransform {

  transform(value: { name: string }[], ...args: unknown[]): string {
    return value.map(item => item.name).join(", ");
  }

}
