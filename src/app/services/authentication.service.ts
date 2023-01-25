import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public getLogin(): string | null {
    return localStorage.getItem("login");
  }

  public getPassword(): string | null {
    return localStorage.getItem("password");
  }

  public getRoles(): string[] | undefined {
    return localStorage.getItem("roles")
      ?.split(",");
  }

  public setAuthentication(login: string, password: string, roles?: string[]): void {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
    if (roles) {
      localStorage.setItem("roles", roles.join(","));
    }
  }
}
