import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private http: HttpClient) {}

  getCatFact(): Observable<any> {
    return this.http.get('https://meowfacts.herokuapp.com/');
  }

  getCatImage(): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/images/search');
  }
}
