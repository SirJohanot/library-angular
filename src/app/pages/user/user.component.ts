import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { LanguagePipe } from 'src/app/pipes/language.pipe';
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
    private languagePipe: LanguagePipe,
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
    if (!window.confirm(this.languagePipe.transform(this.user.blocked ? 'unblockConfirmation' : 'blockConfirmation'))) {
      return;
    }
    this.http.patch(`/users/${this.user.id}/switch-blocked`, {})
      .subscribe(() => this.fetchOrder());
  }

}
