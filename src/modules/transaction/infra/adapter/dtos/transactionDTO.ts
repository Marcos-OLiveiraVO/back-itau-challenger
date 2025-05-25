import { IsInt, IsISO8601, IsNotEmpty, IsString, Min } from 'class-validator';
import { IsNonNegativeDecimal } from 'src/shared/utils/decorators/decimal';

export class TransactionInputDTO {
  @IsISO8601({}, { message: 'dataHora must be a valid ISO 8601 date' })
  @IsNotEmpty({ message: 'dataHora is required' })
  dataHora: Date;

  @IsString({ message: 'valor must be a string' })
  @IsNonNegativeDecimal({
    message: 'must be a decimal number and greater than or equal to zero',
  })
  valor: string;
}

export class StatisticsDto {
  @IsInt({ message: 'Time must be a number' })
  @Min(0, { message: 'Time must be greater than or equal to zero' })
  time: number;
}
