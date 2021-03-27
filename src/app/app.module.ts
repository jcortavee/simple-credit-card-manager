import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { NewApplicationComponent } from './components/applications/new-application/new-application.component';
import { ListAplicationComponent } from './components/applications/list-aplication/list-aplication.component';
import { EditAplicationComponent } from './components/applications/edit-aplication/edit-aplication.component';
import { ListCreditCardComponent } from './components/credit-card/list-credit-card/list-credit-card.component';
import { NewCreditCardComponent } from './components/credit-card/new-credit-card/new-credit-card.component';
import { NewTransactionComponent } from './components/transactions/new-transaction/new-transaction.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MyCardsComponent } from './components/credit-card/my-cards/my-cards.component';
import { EditCreditCardComponent } from './components/credit-card/edit-credit-card/edit-credit-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountStateComponent } from './components/account-state/account-state.component';
import { ShowComponent } from './components/credit-card/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewApplicationComponent,
    ListAplicationComponent,
    EditAplicationComponent,
    ListCreditCardComponent,
    NewCreditCardComponent,
    NewTransactionComponent,
    NewUserComponent,
    ListUsersComponent,
    LoginComponent,
    HomeComponent,
    MyCardsComponent,
    EditCreditCardComponent,
    DashboardComponent,
    AccountStateComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
