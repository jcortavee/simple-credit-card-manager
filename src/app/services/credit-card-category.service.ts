import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/Config';
import { CreditCardCategory } from '../models/CreditCardCategory';

@Injectable({
  providedIn: 'root'
})
export class CreditCardCategoryService {

  private serviceUrl = `${Config.BASEURL}/creditcard-categories`;

  constructor(private http: HttpClient) { }

  public getCreditCardCategories(): Observable<HttpResponse<CreditCardCategory[]>> {
    return this.http.get<CreditCardCategory[]>(this.serviceUrl, { observe: 'response' });
  }

}
