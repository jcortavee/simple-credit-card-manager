import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/Config';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serviceUrl = `${Config.BASEURL}/users`;

  constructor(private http: HttpClient) { }

  public createUsers(user: User): Observable<any> {
    return this.http.post<any>(this.serviceUrl, user, Config.httpOptions);
  }

  public getUsers(): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(this.serviceUrl, { observe: 'response' });
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.serviceUrl}/${id}`);
  }
}
