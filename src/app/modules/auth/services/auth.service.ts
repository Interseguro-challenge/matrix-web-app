import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.iamApi;
  constructor(private http: HttpClient) {}

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password,
    };

    return this.http.post(`${this.URL}/users/login`, body);
  }
}
