import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userLogin: string = this.authService.getLogin() || '';

  constructor(
    private authService: AuthenticationService,
    public languageService: LanguageService
  ) { }

}
