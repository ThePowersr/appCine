export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Angel Parraga",
    email: "angelzde36@gmail.com",
    password: "123456",
  },
  {
    id: 2,
    name: "Diego Ceballos",
    email: "diego.ceballoz@gmail.com",
    password: "123456",
  },
];
