import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Query } from '../../core/models/query.model';
import { PaginatorResponse } from '../../core/types/paginator-response';
import { BaseResponse } from '../../core/types/base-response';
import { Criteria } from '../../core/models/criteria.model';

export abstract class BaseService<T> {
  protected readonly route: string;
  protected readonly http: HttpClient;

  constructor(http: HttpClient, route: string) {
    this.http = http;
    this.route = route;
  }

  create(data: T & Record<string, any>): Observable<void> {
    let payload: T | FormData;
    if (data.hasOwnProperty('file')) {
      payload = this.toFormData(data);
      console.log('Persist as FORMDATA');
    } else {
      payload = { ...data };
      console.log('Persist as JSON');
    }
    return this.http.post<void>(`${this.route}/create`, payload);
  }

  update(data: T & Record<string, any>): Observable<void> {
    let payload: T | FormData;
    if (data.hasOwnProperty('file')) {
      payload = this.toFormData(data);
    } else {
      payload = { ...data };
    }
    return this.http.put<void>(`${this.route}/update`, payload);
  }

  toFormData(data: T & Record<string, any>): FormData {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
    return formData;
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.route}/delete/${id}`);
  }

  getById(id: string): Observable<BaseResponse<T>> {
    const params = new HttpParams();
    params.append('id', id);

    return this.http.patch<BaseResponse<T>>(`${this.route}/${id}`, { params });
  }

  getAll(): Observable<BaseResponse<T>[]> {
    const params = new HttpParams();

    return this.http.patch<BaseResponse<T>[]>(`${this.route}`, { params });
  }

  search(criteria: Criteria): Observable<PaginatorResponse<T>> {
    let params = new HttpParams();
    let filters = '';

    if (criteria.query.filters && criteria.query.filters.length > 0) {
      filters = criteria.query.filters
        .map(
          (filter, index) =>
            `filters[${index}][field]=${filter.field}&filters[${index}][operator]=${filter.operator}&filters[${index}][value]=${filter.value}`
        )
        .join('&');
    }

    if (!!criteria.order) params = params.append('order', criteria.order);
    if (!!criteria.orderBy) params = params.append('orderBy', criteria.orderBy);

    if (!!criteria.limit) params = params.append('limit', criteria.limit.toString());
    if (!!criteria.offset) params = params.append('offset', criteria.offset.toString());

    return this.http.patch<PaginatorResponse<T>>(`${this.route}/search?${filters}${!!filters ? '&' : ''}${params}`, {});
  }
}
