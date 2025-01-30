export interface AutoRecurring {
  frequency: number;
  frequency_type: string;
  transaction_amount?: number;
  currency_id: string;
  free_trial?: boolean;
}
