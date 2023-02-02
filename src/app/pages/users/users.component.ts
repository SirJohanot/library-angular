import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  allUsers!: User[];
  displayedUsers!: User[];

  constructor(
    private http: HttpClient,
    private ref: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.http.get<User[]>("/users")
      .subscribe(users => {
        this.allUsers = users;
        this.ref.detectChanges()
      });
  }

  setDisplayedUsers(users: User[]): void {
    this.displayedUsers = users;
  }

  trackUsers(index: number, user: User) {
    return user.id;
  }

}
