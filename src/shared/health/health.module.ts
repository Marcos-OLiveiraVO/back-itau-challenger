import { Module } from '@nestjs/common';
import { HealthCheckController } from './healthCheck';

@Module({
  controllers: [HealthCheckController],
})
export class HealthModule {}
