import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookComponent } from './pages/book/book.component';
import { BooksComponent } from './pages/books/books.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
    data: {
      expectedRoles: ['READER', 'LIBRARIAN', 'ADMIN']
    }
  },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [AuthenticationGuard],
    data: {
      expectedRoles: ['READER', 'LIBRARIAN', 'ADMIN']
    }
  },
  {
    path: 'book/:id',
    component: BookComponent,
    canActivate: [AuthenticationGuard],
    data: {
      expectedRoles: ['READER', 'LIBRARIAN', 'ADMIN']
    }
  },
  {
    path: 'book/:id/edit',
    component: EditBookComponent,
    canActivate: [AuthenticationGuard],
    data: {
      expectedRoles: ['ADMIN']
    }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthenticationGuard],
    data: {
      expectedRoles: ['READER', 'LIBRARIAN']
    }
  },
  {
    path: 'order/:id',
    component: OrderComponent,
    canActivate: [AuthenticationGuard],
    data: {
      expectedRoles: ['READER', 'LIBRARIAN']
    }
  },
  {
    path: 'add-book',
    component: AddBookComponent,
    canActivate: [AuthenticationGuard],
    data: {
      expectedRoles: ['ADMIN']
    }
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthenticationGuard],
    data: {
      expectedRoles: ['ADMIN']
    }
  },
  {
    path: 'user/:login',
    component: UserComponent,
    canActivate: [AuthenticationGuard],
    data: {
      expectedRoles: ['ADMIN']
    }
  },
  {
    path: 'user/:login/edit',
    component: EditUserComponent,
    canActivate: [AuthenticationGuard],
    data: {
      expectedRoles: ['ADMIN']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
