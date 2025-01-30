export interface Query {
  filters: Array<{ field: string; operator: string; value: string }>;
}
