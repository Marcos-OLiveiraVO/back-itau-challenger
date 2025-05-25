import { Injectable } from '@nestjs/common';
import { ITransactionRepository } from '../interface/ITransactionRepository';

@Injectable()
export class DeleteAllTransactionUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(): Promise<void> {
    await this.transactionRepository.deleteAllTransactions();
  }
}
