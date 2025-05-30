import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateTransactionUseCase } from 'src/modules/transaction/application/use-cases/createTransactionUsecase';
import { TransactionInputDTO } from '../../adapter/dtos/transactionDTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Transaction')
@Controller('/transacao')
export class CreateTransactionController {
  constructor(private readonly createTransaction: CreateTransactionUseCase) {}

  @Post()
  @HttpCode(201)
  async handler(@Body() data: TransactionInputDTO): Promise<void> {
    await this.createTransaction.execute({
      dateHour: new Date(data.dataHora),
      value: data.valor,
    });
  }
}
