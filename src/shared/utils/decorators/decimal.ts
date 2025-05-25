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
            return !decimal.isNaN() && !decimal.isNegative();
          } catch {
            return false;
          }
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a decimal number and greater than or equal to zero`;
        },
      },
    });
  };
}
