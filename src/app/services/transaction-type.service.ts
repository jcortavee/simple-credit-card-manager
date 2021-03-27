import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/Config';
import { TransactionType } from '../models/TransactionType';

@Injectable({
  providedIn: 'root'
})
export class TransactionTypeService {

  private serviceUrl = `${Config.BASEURL}/transaction-types`;

  constructor(private http: HttpClient) { }

  public getTransactionTypes(): Observable<HttpResponse<TransactionType[]>> {
    return this.http.get<TransactionType[]>(this.serviceUrl, { observe: 'response' });
  }
  
}
