import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DuckService {
  constructor(private http: HttpClient) {}

  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  getDuckImage(): Observable<any> {
    return this.http.get(`${this.proxyUrl}https://random-d.uk/api/random`);
  }
}
