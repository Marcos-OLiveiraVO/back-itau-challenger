import { Injectable } from '@nestjs/common';
import { Transaction } from 'src/modules/transaction/application/entity/transaction';
import { ITransactionRepository } from 'src/modules/transaction/application/interface/ITransactionRepository';

@Injectable()
export class TransactionRepository implements ITransactionRepository {
  private transaction = new Map<number, Transaction>();

  async create(transaction: Transaction): Promise<void> {
    const ids = [...this.transaction.keys()];
    const id = Math.max(...ids) + 1;

    this.transaction.set(id, transaction);
  }

  async deleteAllTransactions(): Promise<void> {
    this.transaction.clear();
  }
}
