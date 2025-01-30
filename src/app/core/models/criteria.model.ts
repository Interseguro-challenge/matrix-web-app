import { Query } from './query.model';

export interface Criteria {
  query: Query;
  order?: string;
  orderBy?: string;
  limit?: number;
  offset?: number;
}
