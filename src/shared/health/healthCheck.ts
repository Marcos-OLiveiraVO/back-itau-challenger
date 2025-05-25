import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthCheckController {
  constructor() {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async handler() {
    return HttpStatus.OK;
  }
}
