import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private catFactUrl = 'https://meowfacts.herokuapp.com/';
  private catImageUrl = 'https://api.thecatapi.com/v1/images/search';

  constructor(private http: HttpClient) {}

  getCatFact(): Observable<any> {
    return this.http.get(this.catFactUrl);
  }

  getCatImage(): Observable<any> {
    return this.http.get(this.catImageUrl);
  }
}
