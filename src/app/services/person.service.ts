import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/Config';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private serviceUrl = `${Config.BASEURL}/person`;

  constructor(private http: HttpClient) { }

  public createPerson(person: Person): Observable<any> {
    return this.http.post<any>(this.serviceUrl, person, Config.httpOptions);
  }

  public getPerson(): Observable<HttpResponse<Person[]>> {
    return this.http.get<Person[]>(this.serviceUrl, { observe: 'response' });
  }

  public getPeople(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.serviceUrl}/${id}`);
  }

}
