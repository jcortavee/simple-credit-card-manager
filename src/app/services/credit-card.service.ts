import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/Config';
import { CreditCard } from '../models/CreditCard';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  private serviceUrl = `${Config.BASEURL}/creditcards`;

  constructor(private http: HttpClient) { }

  public createCreditCard(creditCard: CreditCard): Observable<any> {
    return this.http.post<any>(this.serviceUrl, creditCard, Config.httpOptions);
  }

  public updateCreditCard(creditCard: CreditCard): Observable<any> {
    return this.http.put<any>(`${this.serviceUrl}/${creditCard.creditCardId}`, creditCard, Config.httpOptions);
  }

  public getCreditCards(): Observable<HttpResponse<CreditCard[]>> {
    return this.http.get<CreditCard[]>(this.serviceUrl, { observe: 'response' });
  }
  public getMyCreditCards(userId: number): Observable<HttpResponse<CreditCard[]>> {
    return this.http.get<CreditCard[]>(`${this.serviceUrl}/user/${userId}`, { observe: 'response' });
  }

  public getCreditCard(id: number): Observable<CreditCard> {
    return this.http.get<CreditCard>(`${this.serviceUrl}/${id}`);
  }
  
}
