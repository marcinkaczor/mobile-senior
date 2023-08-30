import { v4 as uuidv4 } from 'uuid';

export enum PreferenceCode {
  PickUpFrom,
  DeliverTo,
  WheelChair,
  AmplyObia,
  Deafness,
  Talkative,
}

export interface Preference {
  id: string;
  code: PreferenceCode;
  name: string;
}

export const PREFERENCES = [
  {
    id: uuidv4(),
    code: PreferenceCode.PickUpFrom,
    name: 'Pomoc w odbiorze z mieszkania',
    description: 'Potrzebuję pomocy w odbiorze z mieszkania',
  },
  {
    id: uuidv4(),
    code: PreferenceCode.DeliverTo,
    name: 'Pomoc w powrocie do mieszkania',
    description: 'Potrzebuję pomocy w powrocie do mieszkania',
  },
  {
    id: uuidv4(),
    code: PreferenceCode.WheelChair,
    name: 'Transport wózka inwalidzkiego',
    description: 'Korzystam z wózka inwalidzkiego',
  },
  {
    id: uuidv4(),
    code: PreferenceCode.AmplyObia,
    name: 'Pomoc osobie niedowidzącej',
    description: 'Słabo widzę',
  },
  {
    id: uuidv4(),
    code: PreferenceCode.Deafness,
    name: 'Pomoc osobie niedosłyszącej',
    description: 'Słabo słyszę',
  },
  {
    id: uuidv4(),
    code: PreferenceCode.Talkative,
    name: 'Rozmowa',
    description: 'Jestem rozmowny/-a',
  },
];
