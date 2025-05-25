import { Controller, Delete, HttpCode } from '@nestjs/common';
import { DeleteAllTransactionUseCase } from 'src/modules/transaction/application/use-cases/deleteAllTransactionsUsecase';

@Controller('/transacao')
export class DeleteAllTransactionController {
  constructor(private deleteAllTransaction: DeleteAllTransactionUseCase) {}

  @Delete()
  @HttpCode(200)
  async handler(): Promise<void> {
    await this.deleteAllTransaction.execute();
  }
}
