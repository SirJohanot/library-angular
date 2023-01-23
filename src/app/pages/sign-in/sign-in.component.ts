import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInObj: any = {
    login: '',
    password: ''
  }

  constructor(private http: HttpClient) { }

  onSubmit(): void {
    console.log("submitted");
  }
}
