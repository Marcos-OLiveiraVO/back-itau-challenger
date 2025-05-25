import Decimal from 'decimal.js';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { TransactionInput } from '../interface/transactionRequest';
import { Transaction } from '../entity/transaction';
import { ITransactionRepository } from '../interface/ITransactionRepository';

@Injectable()
export class CreateTransactionUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(data: TransactionInput): Promise<void> {
    const dateNow = new Date();

    if (data.dateHour > dateNow) {
      throw new UnprocessableEntityException(
        'Transaction date cannot be in the future',
      );
    }

    const transaction = new Transaction({
      ...data,
      value: new Decimal(data.value),
    });

    await this.transactionRepository.create(transaction);
  }
}
