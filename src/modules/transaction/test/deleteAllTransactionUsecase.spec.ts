import { TransactionRepository } from '../infra/database/repository/transactionRepository';
import { DeleteAllTransactionUseCase } from '../application/use-cases/deleteAllTransactionsUsecase';
import { CreateTransactionUseCase } from '../application/use-cases/createTransactionUsecase';

let transactionRepository: TransactionRepository;
let deleteAllTransaction: DeleteAllTransactionUseCase;
let createTransaction: CreateTransactionUseCase;

describe('Delete transaction use case', () => {
  beforeEach(async () => {
    transactionRepository = new TransactionRepository();
    deleteAllTransaction = new DeleteAllTransactionUseCase(
      transactionRepository,
    );
    createTransaction = new CreateTransactionUseCase(transactionRepository);
  });

  it('should be able to delete all transactions', async () => {
    await createTransaction.execute({ dateHour: new Date(), value: '100' });
    expect(transactionRepository.transaction.size).toBe(1);

    await deleteAllTransaction.execute();
    expect(transactionRepository.transaction.size).toBe(0);
  });
});
