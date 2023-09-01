export enum UserRole {
  Senior,
  Driver,
  None,
}

export interface User {
  name: string;
  surname: string;
  email: string;
  street: string;
  commune: string;
  district: string;
  postalCode: string;
  about: string;
  role: UserRole;
}

export const USERS: User[] = [
  {
    name: 'Bogdan',
    surname: 'Gałązka',
    email: 'galazka.bogdan@gmail.com',
    street: 'Narutowicza 88',
    commune: 'Ogrodzieniec',
    district: 'Zawiercie',
    postalCode: '42-440',
    about: 'Jestem emerytem, lubię spacerować i zajmować się wnukami.',
    role: UserRole.Senior,
  },
  {
    name: 'Andrzej',
    surname: 'Jaworski',
    email: 'jaworski.andrzej@gmail.com',
    street: '1 Maja 22',
    commune: 'Ogrodzieniec',
    district: 'Zawiercie',
    postalCode: '42-440',
    about:
      'Jestem ratownikiem medycznym, wolne chwile spędzam aktywnie z rodziną oraz pomagam emerytom w ich codziennych zadaniach.',
    role: UserRole.Driver,
  },
];
