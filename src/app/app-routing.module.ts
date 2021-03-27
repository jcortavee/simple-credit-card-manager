import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditAplicationComponent } from './components/applications/edit-aplication/edit-aplication.component';
import { ListAplicationComponent } from './components/applications/list-aplication/list-aplication.component';
import { NewApplicationComponent } from './components/applications/new-application/new-application.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EditCreditCardComponent } from './components/credit-card/edit-credit-card/edit-credit-card.component';
import { ListCreditCardComponent } from './components/credit-card/list-credit-card/list-credit-card.component';
import { MyCardsComponent } from './components/credit-card/my-cards/my-cards.component';
import { NewCreditCardComponent } from './components/credit-card/new-credit-card/new-credit-card.component';
import { ShowComponent } from './components/credit-card/show/show.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NewTransactionComponent } from './components/transactions/new-transaction/new-transaction.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';

const routes: Routes = [
  { path: 'application/new', component: NewApplicationComponent, pathMatch: 'full'},
  { path: 'application/:id', component: EditAplicationComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'cards', component: ListCreditCardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'cards/edit/:id', component: EditCreditCardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'show/:id', component: ShowComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'my-cards', component: MyCardsComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'cards/:id', component: NewCreditCardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'transactions', component: NewTransactionComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'users/new', component: NewUserComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'users', component: ListUsersComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'application', component: ListAplicationComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
