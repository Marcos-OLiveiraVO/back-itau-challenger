import { Transaction } from '../entity/transaction';
import { StatisticsOutput } from './transactionRequest';

export abstract class ITransactionRepository {
  abstract create(transaction: Transaction): Promise<void>;
  abstract getTransactionsStatistics(time: number): Promise<StatisticsOutput>;
  abstract deleteAllTransactions(): Promise<void>;
}
