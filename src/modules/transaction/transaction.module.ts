import { Module } from '@nestjs/common';
import { CreateTransactionUseCase } from './application/use-cases/createTransactionUsecase';
import { CreateTransactionController } from './infra/http/controller/createTransactionController';
import { ITransactionRepository } from './application/interface/ITransactionRepository';
import { TransactionRepository } from './infra/database/repository/transactionRepository';
import { DeleteAllTransactionController } from './infra/http/controller/deleteAllTransactionController';
import { DeleteAllTransactionUseCase } from './application/use-cases/deleteAllTransactionsUsecase';

@Module({
  imports: [],
  providers: [
    CreateTransactionUseCase,
    DeleteAllTransactionUseCase,
    { provide: ITransactionRepository, useClass: TransactionRepository },
  ],
  controllers: [CreateTransactionController, DeleteAllTransactionController],
})
export class TransactionModule {}
