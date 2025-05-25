import Decimal from 'decimal.js';
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsNonNegativeDecimal(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isNonNegativeDecimal',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          try {
            const decimal = new Decimal(value);
            const isNonNegative = decimal.greaterThanOrEqualTo(0);
            const decimalPlaces = decimal.decimalPlaces();

            const isValidDecimal = isNonNegative && decimalPlaces <= 2;

            return isValidDecimal;
          } catch {
            return false;
          }
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a decimal number and greater than or equal to zero with a maximum of 2 decimal places`;
        },
      },
    });
  };
}
