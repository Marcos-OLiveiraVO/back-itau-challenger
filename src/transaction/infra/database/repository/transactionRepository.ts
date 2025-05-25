import { Transaction } from 'src/transaction/application/entity/transaction';
import { ITransactionRepository } from 'src/transaction/application/interface/ITransactionRepository';

export class TransactionRepository implements ITransactionRepository {
  private transaction = new Map<number, Transaction>();

  async create(transaction: Transaction): Promise<void> {
    const ids = [...this.transaction.keys()];
    const id = Math.max(...ids) + 1;

    this.transaction.set(id, transaction);
  }
}
