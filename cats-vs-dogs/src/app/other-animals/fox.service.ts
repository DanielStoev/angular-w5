import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoxService {
  
  constructor(private http: HttpClient) {}

  getFoxImage(): Observable<any> {
    return this.http.get('https://randomfox.ca/floof/');
  }
}
