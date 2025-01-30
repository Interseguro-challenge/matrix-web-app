import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {
  private readonly URL = environment.matrixTransformApi;

  constructor(private http: HttpClient) {}

  sendMatrix(matrix: number[][]): Observable<any> {
    return this.http.post<any>(`${this.URL}/matrix-transform/transform`, { matrix });
  }
}
