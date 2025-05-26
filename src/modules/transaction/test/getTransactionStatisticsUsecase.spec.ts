import Decimal from 'decimal.js';
import { TransactionRepository } from '../infra/database/repository/transactionRepository';
import { CreateTransactionUseCase } from '../application/use-cases/createTransactionUsecase';
import { GetTransactionStatisticsUseCase } from '../application/use-cases/getTransactionStatisticsUsecase';

let transactionRepository: TransactionRepository;
let createTransaction: CreateTransactionUseCase;
let transactionStatistics: GetTransactionStatisticsUseCase;

describe('Get transaction statistics use case', () => {
  beforeEach(async () => {
    transactionRepository = new TransactionRepository();
    createTransaction = new CreateTransactionUseCase(transactionRepository);
    transactionStatistics = new GetTransactionStatisticsUseCase(
      transactionRepository,
    );
  });

  it('should be able to get all transactions statistics in the time period', async () => {
    await createTransaction.execute({ dateHour: new Date(), value: '100' });
    await createTransaction.execute({ dateHour: new Date(), value: '50' });
    const stats = await transactionStatistics.execute(60);

    expect(transactionRepository.transaction.size).toBe(2);
    expect(stats).toStrictEqual({
      count: 2,
      sum: new Decimal(150),
      avg: new Decimal(75),
      min: new Decimal(50),
      max: new Decimal(100),
    });
  });

  it('should be able to return an object with zero values if there are no transactions', async () => {
    const stats = await transactionStatistics.execute(60);

    expect(transactionRepository.transaction.size).toBe(0);
    expect(stats).toStrictEqual({
      count: 0,
      sum: new Decimal(0),
      avg: new Decimal(0),
      min: new Decimal(0),
      max: new Decimal(0),
    });
  });
});
