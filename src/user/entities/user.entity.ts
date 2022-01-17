export class User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  
  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
}
