import { ApiProperty } from '@nestjs/swagger';
import { IsNonNegativeDecimal } from 'src/shared/utils/decorators/decimal';

import {
  IsInt,
  IsISO8601,
  IsNotEmpty,
  IsString,
  Matches,
  Min,
} from 'class-validator';

const correctDateRegex =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d+)?(Z|[+-]\d{2}:\d{2})?$/;

export class TransactionInputDTO {
  @ApiProperty({ type: 'string', format: 'date-time' })
  @IsISO8601({}, { message: 'dataHora must be a valid ISO 8601 date' })
  @IsNotEmpty({ message: 'dataHora is required' })
  @Matches(correctDateRegex, {
    message: 'dataHora must be a valid date eg: 2020-08-07T12:34:56.789-03:00',
  })
  dataHora: string;

  @ApiProperty({ type: 'string', format: '12.65' })
  @IsString({ message: 'valor must be a string' })
  @IsNonNegativeDecimal()
  valor: string;
}

export class StatisticsDto {
  @ApiProperty({ type: 'number', format: 'number', minimum: 0 })
  @IsInt({ message: 'Time must be a number' })
  @Min(0, { message: 'Time must be greater than or equal to zero' })
  time: number;
}
