import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private dogFactUrl = 'https://dog-api.kinduff.com/api/facts';
  private dogImageUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getDogFact(): Observable<any> {
    return this.http.get(this.dogFactUrl);
  }

  getDogImage(): Observable<any> {
    return this.http.get(this.dogImageUrl);
  }
}
