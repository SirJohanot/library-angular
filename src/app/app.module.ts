import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookChangesComponent } from './components/book-changes/book-changes.component';
import { BookOrderFormComponent } from './components/book-order-form/book-order-form.component';
import { BookParametersComponent } from './components/book-parameters/book-parameters.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OrderParametersComponent } from './components/order-parameters/order-parameters.component';
import { PaginationBarComponent } from './components/pagination-bar/pagination-bar.component';
import { UserParametersComponent } from './components/user-parameters/user-parameters.component';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookComponent } from './pages/book/book.component';
import { BooksComponent } from './pages/books/books.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { HomeComponent } from './pages/home/home.component';
import { MissingComponent } from './pages/missing/missing.component';
import { OrderComponent } from './pages/order/order.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthorsPipe } from './pipes/authors.pipe';
import { LanguagePipe } from './pipes/language.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    LayoutComponent,
    SignInComponent,
    SignUpComponent,
    BooksComponent,
    OrdersComponent,
    AddBookComponent,
    UsersComponent,
    UnauthorizedComponent,
    HomeComponent,
    LanguagePipe,
    BookParametersComponent,
    BookComponent,
    AuthorsPipe,
    PaginationBarComponent,
    BookChangesComponent,
    EditBookComponent,
    BookOrderFormComponent,
    OrderParametersComponent,
    OrderComponent,
    UserParametersComponent,
    UserComponent,
    EditUserComponent,
    MissingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    },
    LanguagePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
