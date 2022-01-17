import { registerDecorator, ValidationOptions } from 'class-validator';
import { DateOfBirthValidator } from '../validators/date-of-birth.validator';

export function IsDateLesserThan(
  constraints: any[],
  options?: ValidationOptions,
) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      constraints: [constraints],
      validator: DateOfBirthValidator,
    });
  };
}
