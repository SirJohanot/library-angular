import { Injectable } from '@angular/core';

const loginKey = "login";
const passwordKey = "password";
const rolesKey = "roles";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public getLogin(): string | null {
    return localStorage.getItem(loginKey);
  }

  public getPassword(): string | null {
    return localStorage.getItem(passwordKey);
  }

  public getRoles(): string[] | undefined {
    return localStorage.getItem(rolesKey)
      ?.split(",");
  }

  public setAuthentication(login: string, password: string, roles?: string[]): void {
    localStorage.setItem(loginKey, login);
    localStorage.setItem(passwordKey, password);
    if (roles) {
      localStorage.setItem(rolesKey, roles.join(","));
    }
  }

  public resetAuthentication(): void {
    localStorage.removeItem(loginKey);
    localStorage.removeItem(passwordKey);
    localStorage.removeItem(rolesKey);
  }

  public isAuthenticated(): boolean {
    const login = localStorage.getItem(loginKey);
    const password = localStorage.getItem(passwordKey);
    const roles = localStorage.getItem(rolesKey);
    return !!(login && password && roles);
  }
}
