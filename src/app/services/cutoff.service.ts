import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/Config';

@Injectable({
  providedIn: 'root'
})
export class CutoffService {

  private serviceUrl = `${Config.BASEURL}/cutoff`;

  constructor(private http: HttpClient) { }

  public calculateCutoff(): Observable<any> {
    return this.http.get<any>(`${this.serviceUrl}/calculate`, { observe: 'response' });
  }
}
