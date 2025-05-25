import { UnprocessableEntityException } from '@nestjs/common';
import { CreateTransactionUseCase } from '../application/use-cases/createTransactionUsecase';
import { TransactionRepository } from '../infra/database/repository/transactionRepository';

let transactionRepository: TransactionRepository;
let createTransaction: CreateTransactionUseCase;

describe('Create transaction use case', () => {
  beforeEach(async () => {
    transactionRepository = new TransactionRepository();
    createTransaction = new CreateTransactionUseCase(transactionRepository);
  });

  it('should be able to create a transaction', async () => {
    await createTransaction.execute({
      dateHour: new Date(),
      value: '100',
    });

    expect(transactionRepository.transaction.size).toBe(1);
  });

  it('should be able to throw an error if the transaction happens in the future', async () => {
    const dateInFuture = new Date(new Date().getTime() + 1000);

    await expect(
      createTransaction.execute({ dateHour: dateInFuture, value: '100' }),
    ).rejects.toEqual(
      new UnprocessableEntityException(
        'Transaction date cannot be in the future',
      ),
    );
  });

  it('should be able to throw an error if the transaction value is not valid', async () => {
    await expect(
      createTransaction.execute({ dateHour: new Date(), value: 'invalid' }),
    ).rejects.toEqual(
      new UnprocessableEntityException(
        'Transaction value must be a decimal number and greater than or equal to zero with a maximum of 2 decimal places',
      ),
    );
  });

  it('should be able to throw an error if value is negative', async () => {
    await expect(
      createTransaction.execute({ dateHour: new Date(), value: '-100' }),
    ).rejects.toThrow(UnprocessableEntityException);
  });

  it('should be able to throw an error if value has more than two decimal places', async () => {
    await expect(
      createTransaction.execute({ dateHour: new Date(), value: '100.1234' }),
    ).rejects.toThrow(UnprocessableEntityException);
  });
});
