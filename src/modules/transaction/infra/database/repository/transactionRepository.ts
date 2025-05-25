import Decimal from 'decimal.js';
import { Injectable } from '@nestjs/common';
import { Transaction } from 'src/modules/transaction/application/entity/transaction';
import { ITransactionRepository } from 'src/modules/transaction/application/interface/ITransactionRepository';
import { StatisticsOutput } from 'src/modules/transaction/application/interface/transactionRequest';
import { getRecentCutoff } from 'src/shared/utils/functions/cutOffDatetime';

@Injectable()
export class TransactionRepository implements ITransactionRepository {
  private transaction = new Map<number, Transaction>();

  async create(transaction: Transaction): Promise<void> {
    const ids = [...this.transaction.keys()];
    const id = ids.length > 0 ? Math.max(...ids) + 1 : 1;

    this.transaction.set(id, transaction);
  }

  async getTransactionsStatistics(time: number): Promise<StatisticsOutput> {
    const lastTime = getRecentCutoff(time);

    const transactions = [...this.transaction.values()].filter(
      (transaction) => transaction.dateHour >= lastTime,
    );

    if (transactions.length === 0) {
      return {
        count: 0,
        sum: new Decimal(0),
        avg: new Decimal(0),
        min: new Decimal(0),
        max: new Decimal(0),
      };
    }

    const inicialReduceObject = {
      sum: new Decimal(0),
      min: transactions[0].value,
      max: transactions[0].value,
    };

    const stats = transactions.reduce((acc, transaction) => {
      return {
        sum: acc.sum.add(transaction.value),
        min: Decimal.min(acc.min, transaction.value),
        max: Decimal.max(acc.max, transaction.value),
      };
    }, inicialReduceObject);

    const total = transactions.length;
    const average = stats.sum.div(total);

    return {
      count: total,
      sum: stats.sum,
      avg: average,
      min: stats.min,
      max: stats.max,
    };
  }

  async deleteAllTransactions(): Promise<void> {
    this.transaction.clear();
  }
}
