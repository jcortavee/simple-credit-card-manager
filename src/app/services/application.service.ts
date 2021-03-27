import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/Config';
import { Application } from '../models/Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private serviceUrl = `${Config.BASEURL}/application`;

  constructor(private http: HttpClient) { }

  public createApplication(application: Application): Observable<any> {
    return this.http.post<any>(this.serviceUrl, application, Config.httpOptions);
  }

  public getApplications(): Observable<HttpResponse<Application[]>> {
    return this.http.get<Application[]>(this.serviceUrl, { observe: 'response' });
  }

  public getApplication(id: number): Observable<Application> {
    return this.http.get<Application>(`${this.serviceUrl}/${id}`);
  }

}
