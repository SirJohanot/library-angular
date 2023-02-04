import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, NEVER } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { UserDto } from 'src/app/interfaces/UserDto';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id!: number;
  login: string = '';

  userDto: UserDto = {
    firstName: '',
    lastName: '',
    role: ''
  }

  error: string = '';

  constructor(
    public languageService: LanguageService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.login = this.route.snapshot.paramMap.get('login') || '';
    this.http.get<User>(`/users/${this.login}`)
      .subscribe(user => {
        this.userDto = {
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role
        }
        this.id = user.id;
      });
  }

  handleSubmit() {
    this.http.put(`/users/${this.id}`, this.userDto, { observe: 'response' })
      .pipe(
        catchError((error) => {
          switch (error.status) {
            case 400:
              this.error = error?.error?.error;
              break;
            default:
              this.error = 'Could not edit user';
          }
          return NEVER;
        })
      )
      .subscribe(() => {
        this.router.navigate([`/user/${this.login}`]);
      });
  }
}
