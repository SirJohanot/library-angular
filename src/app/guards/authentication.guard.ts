import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
      return false;
    }

    const expectedRoles = route.data['expectedRoles'];
    const authenticationRoles = this.authService.getRoles();
    const authContainsOneOfTheExpectedRoles = !!(authenticationRoles?.find((role) => expectedRoles?.includes(role)));
    if (!authContainsOneOfTheExpectedRoles) {
      this.router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  }

}
