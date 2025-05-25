import { Controller, Delete, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteAllTransactionUseCase } from 'src/modules/transaction/application/use-cases/deleteAllTransactionsUsecase';

@ApiTags('Transaction')
@Controller('/transacao')
export class DeleteAllTransactionController {
  constructor(private deleteAllTransaction: DeleteAllTransactionUseCase) {}

  @Delete()
  @HttpCode(200)
  async handler(): Promise<void> {
    await this.deleteAllTransaction.execute();
  }
}
