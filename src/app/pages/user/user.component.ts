import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userLogin!: string;
  user!: User;

  constructor(
    public languageService: LanguageService,
    public authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.userLogin = this.route.snapshot.paramMap.get('login') || '';
    this.fetchOrder();
  }

  private fetchOrder(): void {
    this.http.get<User>(`/users/${this.userLogin}`)
      .subscribe(user => this.user = user);
  }

  switchUserBlocked(): void {
    this.http.put(`/users/${this.user.id}/switch-blocked`, {})
      .subscribe(() => this.fetchOrder());
  }

}
