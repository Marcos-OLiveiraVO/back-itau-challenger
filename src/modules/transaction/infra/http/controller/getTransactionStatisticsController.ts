import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { StatisticsOutput } from 'src/modules/transaction/application/interface/transactionRequest';
import { GetTransactionStatisticsUseCase } from 'src/modules/transaction/application/use-cases/getTransactionStatisticsUsecase';
import { StatisticsDto } from '../../adapter/dtos/transactionDTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Transaction')
@Controller('transacao')
export class GetTransactionStatisticsController {
  constructor(private getStatistics: GetTransactionStatisticsUseCase) {}

  @Get('/estatistica/:time')
  @HttpCode(200)
  async handle(@Param() params: StatisticsDto): Promise<StatisticsOutput> {
    return await this.getStatistics.execute(params.time);
  }
}
