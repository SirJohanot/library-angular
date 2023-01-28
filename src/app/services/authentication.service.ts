import { Injectable } from '@angular/core';

const loginKey = "login";
const passwordKey = "password";
const rolesKey = "roles";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  getLogin(): string | null {
    return localStorage.getItem(loginKey);
  }

  getPassword(): string | null {
    return localStorage.getItem(passwordKey);
  }

  getRoles(): string[] | undefined {
    return localStorage.getItem(rolesKey)
      ?.split(",");
  }

  setAuthentication(login: string, password: string, roles?: string[]): void {
    localStorage.setItem(loginKey, login);
    localStorage.setItem(passwordKey, password);
    if (roles) {
      localStorage.setItem(rolesKey, roles.join(","));
    }
  }

  resetAuthentication(): void {
    localStorage.removeItem(loginKey);
    localStorage.removeItem(passwordKey);
    localStorage.removeItem(rolesKey);
  }

  isAuthenticated(): boolean {
    const login = localStorage.getItem(loginKey);
    const password = localStorage.getItem(passwordKey);
    const roles = localStorage.getItem(rolesKey);
    return !!(login && password && roles);
  }

  hasAuthentication(): boolean {
    const login = localStorage.getItem(loginKey);
    const password = localStorage.getItem(passwordKey);
    return !!(login && password);
  }

  hasOneOfRoles(expectedRoles: string[]): boolean {
    const authenticationRoles = this.getRoles();
    return !!(authenticationRoles?.find((role) => expectedRoles?.includes(role)));
  }

}
