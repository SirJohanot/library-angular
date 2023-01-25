import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { catchError, map, NEVER } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserRoles } from 'src/app/UserRoles';

@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  login: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  onSubmit(): void {
    this.authService.setAuthentication(this.login, this.password);
    this.http.get<UserRoles>('/users/auth', { observe: 'response' })
      .pipe(
        catchError((error) => {
          switch (error.status) {
            case 400:
              this.error = 'Missing login or password';
              break;
            case 401:
              this.error = 'Invalid credentials';
              break;
            default:
              this.error = 'Authentication failed';
          }
          return NEVER;
        }),
        map((response) => response.body)
      )
      .subscribe(userRoles => this.authService.setAuthentication(this.login, this.password, userRoles?.roles));
  }

  clearError(): void {
    this.error = '';
  }
}
