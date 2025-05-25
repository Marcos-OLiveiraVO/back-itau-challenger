import { Module } from '@nestjs/common';
import { TransactionModule } from './modules/transaction/transaction.module';
import { HealthModule } from './shared/health/health.module';

@Module({
  imports: [TransactionModule, HealthModule],
})
export class AppModule {}
