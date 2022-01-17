import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { Exclude, Type } from 'class-transformer';
import { IsPasswordSafe } from '../../decorators/password.decorator';
import { IsDateLesserThan } from '../../decorators/date-of-birth.decorator';
import { User } from "../entities/user.entity";

export class UserDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsNotEmpty()
  @IsString()
  firstname!: string;

  @IsNotEmpty()
  @IsString()
  lastname!: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @IsPasswordSafe()
  @Exclude({ toPlainOnly: true })
  password?: string;

  @IsNotEmpty()
  @IsDate()
  @IsDateLesserThan([18])
  @Type(() => Date)
  dateOfBirth!: Date;
  
  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
