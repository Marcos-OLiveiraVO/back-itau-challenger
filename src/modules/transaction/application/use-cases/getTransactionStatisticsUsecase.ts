import { Injectable } from '@nestjs/common';
import { ITransactionRepository } from '../interface/ITransactionRepository';
import { StatisticsOutput } from '../interface/transactionRequest';

@Injectable()
export class GetTransactionStatisticsUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(time: number): Promise<StatisticsOutput> {
    return await this.transactionRepository.getTransactionsStatistics(time);
  }
}
