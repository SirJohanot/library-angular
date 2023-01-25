import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthenticationService, private router: Router) { }

  handleSignOut() {
    this.authService.resetAuthentication();
    this.router.navigate(['/sign-in']);
  }

}
