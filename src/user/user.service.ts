import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 'ahgdvb45dfte54aYHs',
      firstname: 'Myśliwiec',
      lastname: 'Kamil',
      email: 'example@sample.com',
      password: 'NotSoSecret!99',
      dateOfBirth: new Date('2000-01-17T22:28:17.186Z'),
    },
    {
      id: 'fpznfFZEdDI87HG',
      firstname: 'SquarePants',
      lastname: 'Sponge-Bob',
      email: 'example@sample.com',
      password: 'NotSoSecret!99',
      dateOfBirth: new Date('1998-01-17T22:28:17.186Z'),
    },
  ];

  create(userDto: UserDto): UserDto {
    const newUser = new User(userDto);
    this.users.push(newUser);
    return new UserDto(newUser);
  }

  findAll(): UserDto[] {
    const usersDto = [];
    for (const user of this.users) {
      usersDto.push(new UserDto(user));
    }
    return usersDto;
  }

  findOne(id: string): UserDto {
    return new UserDto(this.users.find((item) => item.id === id));
  }

  update(id: string, userDto: UserDto): UserDto{
    const user = this.users.find((item) => item.id === id);
    user.email = userDto.email || user.email;
    user.lastname = userDto.lastname || user.lastname;
    user.firstname = userDto.firstname || user.firstname;
    user.password = userDto.password || user.password;
    user.dateOfBirth = userDto.dateOfBirth || user.dateOfBirth;
    return new UserDto(user);
  }

  remove(id: string) {
    this.users = this.users.filter((item) => item.id !== id);
    return this.findOne(id);
  }
}
