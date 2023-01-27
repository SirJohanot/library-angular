import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService: AuthenticationService,
    private router: Router,
    public languageService: LanguageService
  ) { }

  handleSignOut() {
    this.authService.resetAuthentication();
    this.router.navigate(['/sign-in']);
  }

  handleLanguageChange(lang: string) {
    this.languageService.changeLanguage(lang);
  }

}
