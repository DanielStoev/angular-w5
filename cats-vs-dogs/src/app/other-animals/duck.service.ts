import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DuckService {
  private duckFactUrl = 'https://some-api.com/duck/fact';
  private duckImageUrl = 'https://some-api.com/duck/image';

  constructor(private http: HttpClient) {}

  getDuckFact(): Observable<any> {
    return this.http.get(this.duckFactUrl);
  }

  getDuckImage(): Observable<any> {
    return this.http.get(this.duckImageUrl);
  }
}
