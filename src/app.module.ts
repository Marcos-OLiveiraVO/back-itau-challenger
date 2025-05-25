import { Module } from '@nestjs/common';
import { AppController } from './transaction/infra/http/controller/app.controller';
import { AppService } from './transaction/application/use-cases/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
