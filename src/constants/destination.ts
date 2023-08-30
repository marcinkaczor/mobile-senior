import { v4 as uuidv4 } from 'uuid';

export enum DestinationCode {
  ZOZ,
  LEK,
  STO,
  OPT,
  APT,
  ZDR,
}

export interface Destination {
  id: string;
  code: DestinationCode;
  name: string;
  address: string;
}

export const DESTINATIONS = [
  {
    id: uuidv4(),
    code: DestinationCode.ZOZ,
    name: 'Samodzielny Publiczny Zakład Opieki Zdrowotnej w Ogrodzieńcu',
    address: 'Plac Wolności 23, 42-440 Ogrodzieniec',
  },
  {
    id: uuidv4(),
    code: DestinationCode.LEK,
    name: 'Poradnia Lekarza Podstawowej Opieki Zdrowotnej',
    address: 'ul.Kościuszki 102, 42-440 Ogrodzieniec',
  },
  {
    id: uuidv4(),
    code: DestinationCode.STO,
    name: 'Praktyka Stomatologiczna - Lek. Stom. Maria Błażkiewicz',
    address: 'ul.Kopernika 8, 42-440 Ogrodzieniec',
  },
  {
    id: uuidv4(),
    code: DestinationCode.OPT,
    name: 'Salon Optyczny PANI OPTYK Agnieszka Kozioł-Jaworska',
    address: 'ul.Kościuszki 106, 42-440 Ogrodzieniec',
  },
  {
    id: uuidv4(),
    code: DestinationCode.APT,
    name: 'Apteka',
    address: 'Plac Wolności 17, 42-440 Ogrodzieniec',
  },
  {
    id: uuidv4(),
    code: DestinationCode.ZDR,
    name: 'Zdrowe Ceny Spółka z ograniczoną odpowiedzialnością',
    address: 'Plac Wolności 17, 42-440 Ogrodzieniec',
  },
];
