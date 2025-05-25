import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthCheckController {
  constructor() {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async handler() {
    return HttpStatus.OK;
  }
}
