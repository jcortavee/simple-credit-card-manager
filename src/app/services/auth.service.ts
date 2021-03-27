import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from '../config/Config';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serviceUrl = `${Config.BASEURL}/auth`;


  constructor(private http: HttpClient) { }

  public auth(user: string, pass: string): Observable<User> {
    return this.http.get<User>(`${this.serviceUrl}`, {
      headers: new HttpHeaders({ 'Authorization':  `Basic ${btoa(user + ':' + pass)}` })
    });
  }

  public isAuthenticate(): boolean {
    const user: User = JSON.parse(localStorage.getItem('user'));

    return user != undefined && user != null && user.username.length > 0;
  }

  public isInternalUser(): boolean {
    const user: User = JSON.parse(localStorage.getItem('user'));

    return  user != undefined && user != null && user.role.roleId == 1;
  }

}
