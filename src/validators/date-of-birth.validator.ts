import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
export class DateOfBirthValidator implements ValidatorConstraintInterface {
  validate(
    date: Date,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    const currentDate = new Date();
    currentDate.setFullYear(
      currentDate.getFullYear() - validationArguments.constraints[0],
    );
    return date < currentDate;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `L'utilisateur doit être agé de ${validationArguments.constraints[0]} ans et plus.`;
  }
}
