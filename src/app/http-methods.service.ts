import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpMethodsService {
  constructor(private http: HttpClient) {}

  public calculate(values: any, operationType: String) {
    return this.http.post('http://localhost:3000/', { values, operationType });
  }
}
