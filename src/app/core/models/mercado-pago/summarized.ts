export interface Summarized {
  semaphore: string;
  charged_quantity: number;
  charged_amount: number;
  last_charged_date: string;
  last_charged_amount: number;
  quotas?: any;
  pending_charge_quantity?: any;
  pending_charge_amount?: any;
}
