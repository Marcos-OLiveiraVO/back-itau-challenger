import Decimal from 'decimal.js';

export interface TransactionInput {
  value: string;
  dateHour: Date;
}

export interface StatisticsOutput {
  count: number;
  sum: Decimal;
  avg: Decimal;
  min: Decimal;
  max: Decimal;
}
