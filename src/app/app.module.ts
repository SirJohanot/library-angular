import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksComponent } from './pages/books/books.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { LanguagePipe } from './pipes/language.pipe';
import { BookParametersComponent } from './components/book-parameters/book-parameters.component';
import { BookComponent } from './pages/book/book.component';
import { AuthorsPipe } from './pipes/authors.pipe';
import { PaginationBarComponent } from './components/pagination-bar/pagination-bar.component';
import { BookChangesComponent } from './components/book-changes/book-changes.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';

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
    EditBookComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
