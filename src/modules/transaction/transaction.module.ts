import { Module } from '@nestjs/common';
import { CreateTransactionUseCase } from './application/use-cases/createTransactionUsecase';
import { CreateTransactionController } from './infra/http/controller/createTransactionController';
import { ITransactionRepository } from './application/interface/ITransactionRepository';
import { TransactionRepository } from './infra/database/repository/transactionRepository';
import { DeleteAllTransactionController } from './infra/http/controller/deleteAllTransactionController';
import { DeleteAllTransactionUseCase } from './application/use-cases/deleteAllTransactionsUsecase';
import { GetTransactionStatisticsUseCase } from './application/use-cases/getTransactionStatisticsUsecase';
import { GetTransactionStatisticsController } from './infra/http/controller/getTransactionStatisticsController';

@Module({
  imports: [],
  providers: [
    CreateTransactionUseCase,
    DeleteAllTransactionUseCase,
    GetTransactionStatisticsUseCase,
    { provide: ITransactionRepository, useClass: TransactionRepository },
  ],
  controllers: [
    CreateTransactionController,
    DeleteAllTransactionController,
    GetTransactionStatisticsController,
  ],
})
export class TransactionModule {}
