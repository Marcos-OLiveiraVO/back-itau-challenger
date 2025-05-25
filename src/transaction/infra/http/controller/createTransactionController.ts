import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateTransactionUseCase } from 'src/transaction/application/use-cases/createTransactionUsecase';
import { TransactionInputDTO } from '../../adapter/dtos/transactionDTO';

@Controller('/transacao')
export class CreateTransactionController {
  constructor(private readonly createTransaction: CreateTransactionUseCase) {}

  @Post()
  @HttpCode(201)
  async handler(@Body() data: TransactionInputDTO): Promise<void> {
    this.createTransaction.execute({
      dateHour: data.dataHora,
      value: data.valor,
    });
  }
}
