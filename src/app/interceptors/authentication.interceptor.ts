import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(public authenticationService: AuthenticationService, public router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var login = this.authenticationService.getLogin();
    var password = this.authenticationService.getPassword();
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${window.btoa(`${login}:${password}`)}`
      }
    });
    return next.handle(request);
  }
}
