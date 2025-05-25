import { Module } from '@nestjs/common';
import { CreateTransactionUseCase } from './application/use-cases/createTransactionUsecase';
import { CreateTransactionController } from './infra/http/controller/createTransactionController';
import { ITransactionRepository } from './application/interface/ITransactionRepository';
import { TransactionRepository } from './infra/database/repository/transactionRepository';

@Module({
  imports: [],
  providers: [
    CreateTransactionUseCase,
    { provide: ITransactionRepository, useClass: TransactionRepository },
  ],
  controllers: [CreateTransactionController],
})
export class TransactionModule {}
