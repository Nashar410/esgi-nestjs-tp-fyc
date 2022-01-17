import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('donne-moi-toutes-les-informations-d-un-utilisateur')
  getFakeUserList() {
    return [
      {id: "ahgdvb45dfte54aYHs", firstname: "Myśliwiec", lastname: "Kamil", email: "example@sample.com", password: "NotSoSecret!99", dateOfBirth: "1001887200000"},
      {id: "fpznfFZEdDI87HG", firstname: "SquarePants", lastname: "Sponge-Bob", email: "example@sample.com", password: "NotSoSecret!99", dateOfBirth: "1001788200000"},
    ];
  }
}
