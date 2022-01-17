import { registerDecorator, ValidationOptions } from 'class-validator';
import { PasswordValidator } from '../validators/password.validator';

export function IsPasswordSafe(
  options?: ValidationOptions,
) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      constraints: [],
      validator: PasswordValidator,
    });
  };
}
