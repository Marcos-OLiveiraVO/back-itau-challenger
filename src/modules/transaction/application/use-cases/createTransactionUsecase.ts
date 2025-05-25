import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { TransactionInput } from '../interface/transactionRequest';
import { Transaction } from '../entity/transaction';
import { ITransactionRepository } from '../interface/ITransactionRepository';
import { ValidateDecimalValue } from 'src/shared/utils/functions/validateDecimal';

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

    const value = ValidateDecimalValue(data.value);

    const transaction = new Transaction({
      dateHour: data.dateHour,
      value: value,
      createdAt: dateNow,
      updatedAt: dateNow,
    });

    await this.transactionRepository.create(transaction);
  }
}
