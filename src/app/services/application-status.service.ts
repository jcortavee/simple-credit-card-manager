import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/Config';
import { ApplicationStatus } from '../models/ApplicationStatus';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStatusService {

  private serviceUrl = `${Config.BASEURL}/application-status`;

  constructor(private http: HttpClient) { }

  public getApplicationStatus(): Observable<HttpResponse<ApplicationStatus[]>> {
    return this.http.get<ApplicationStatus[]>(this.serviceUrl, { observe: 'response' });
  }

}
