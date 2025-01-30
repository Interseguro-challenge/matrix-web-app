import { AutoRecurring } from './auto-recurring';

export interface MercadoPagoPlan {
  reason: string;
  status: string;
  subscribed: number;
  back_url: string;
  auto_recurring: AutoRecurring;
  collector_id: number;
  init_point: string;
  date_created: string;
  id: string;
  last_modified: string;
  external_reference: string;
  application_id: number;
}
