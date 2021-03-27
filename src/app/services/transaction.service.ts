import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/Config';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private serviceUrl = `${Config.BASEURL}/transactions`;

  constructor(private http: HttpClient) { }

  public createTransaction(transaction: Transaction): Observable<any> {
    return this.http.post<any>(this.serviceUrl, transaction, Config.httpOptions);
  }

  public getTransactions(): Observable<HttpResponse<Transaction[]>> {
    return this.http.get<Transaction[]>(this.serviceUrl, { observe: 'response' });
  }

  public getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.serviceUrl}/${id}`);
  }

  public calculateInterest(): Observable<any> {
    return this.http.get<any>(`${this.serviceUrl}/calculate-interest`, { observe: 'response' });
  }
}
  

