import { Paging } from './paging';

export interface MercadoPagoResponse<T> {
  paging: Paging;
  results: T[];
}
