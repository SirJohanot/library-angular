import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-user-parameters',
  templateUrl: './user-parameters.component.html',
  styleUrls: ['./user-parameters.component.css']
})
export class UserParametersComponent {

  @Input() user!: User;

  constructor(
    public languageService: LanguageService
  ) { }

}
