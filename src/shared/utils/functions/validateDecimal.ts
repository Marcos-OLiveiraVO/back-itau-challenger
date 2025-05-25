import { UnprocessableEntityException } from '@nestjs/common';
import Decimal from 'decimal.js';

export function ValidateDecimalValue(value: string): Decimal {
  try {
    const decimal = new Decimal(value);

    const isNonNegative = decimal.greaterThanOrEqualTo(0);
    const twoDecimalPlaces = decimal.decimalPlaces() <= 2;
    const isNumber = decimal.isFinite();

    const isValidDecimal = isNonNegative && twoDecimalPlaces && isNumber;

    if (!isValidDecimal) {
      throw new UnprocessableEntityException(
        'Transaction value must be a decimal number and greater than or equal to zero with a maximum of 2 decimal places',
      );
    }

    return decimal;
  } catch {
    throw new UnprocessableEntityException(
      'Transaction value must be a decimal number and greater than or equal to zero with a maximum of 2 decimal places',
    );
  }
}
