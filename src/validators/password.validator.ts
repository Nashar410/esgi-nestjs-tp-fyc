import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
export class PasswordValidator implements ValidatorConstraintInterface {
  validate(
    password: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    const regexTest = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])',
    );
    return regexTest.test(password);
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `Le mot de passe ne respecte pas les règles!`;
  }
}
