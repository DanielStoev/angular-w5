import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoxService {
  private foxFactUrl = 'https://some-api.com/fox/fact';
  private foxImageUrl = 'https://some-api.com/fox/image';

  constructor(private http: HttpClient) {}

  getFoxFact(): Observable<any> {
    return this.http.get(this.foxFactUrl);
  }

  getFoxImage(): Observable<any> {
    return this.http.get(this.foxImageUrl);
  }
}
