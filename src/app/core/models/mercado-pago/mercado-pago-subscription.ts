
import { MercadoPagoSubscriptionStatus } from '../../interfaces/mercado-pago-subscription-status.enum';
import { AutoRecurring } from './auto-recurring';
import { Summarized } from './summarized';

export interface MercadoPagoSubscription {
  id: string;
  status: MercadoPagoSubscriptionStatus;
  reason: string;
  summarized: Summarized;
  payer_id: number;
  back_url: string;
  collector_id: number;
  application_id: number;
  date_created: string;
  last_modified: string;
  init_point: string;
  auto_recurring: AutoRecurring;
  next_payment_date: string;
  payment_method_id: string;
  payer_first_name: string;
  payer_last_name: string;
  payer_email?: string;
  notification_url?: string;
  first_invoice_offset?: any;
}
