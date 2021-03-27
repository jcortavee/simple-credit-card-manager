import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/Config';
import { Account } from '../models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private serviceUrl = `${Config.BASEURL}/accounts`;

  constructor(private http: HttpClient) { }

  public createAccount(account: Account): Observable<any> {
    return this.http.post<any>(this.serviceUrl, account, Config.httpOptions);
  }

  public getAccounts(): Observable<HttpResponse<Account[]>> {
    return this.http.get<Account[]>(this.serviceUrl, { observe: 'response' });
  }

  public getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.serviceUrl}/${id}`);
  }

}
