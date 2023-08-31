import { DestinationCode } from '@mobileSenior/constants/destination';
import { PreferenceCode } from '@mobileSenior/constants/preference';
import { uuidv4 } from '@mobileSenior/utils/uuidv4';

export enum DriverGender {
  Man,
  Woman,
}

export interface Driver {
  id: string;
  name: string;
  surname: string;
  gender: DriverGender;
  age: number;
  city: string;
  car: {
    vendor: string;
    model: string;
    color: string;
    boardNumber: string;
  };
  description: string;
  ranking: 0 | 1 | 2 | 3 | 4 | 5;
  destinationCodes: DestinationCode[];
  preferenceCodes: PreferenceCode[];
  availabilityRanges: { from: string; to: string }[];
}

export const DRIVERS: Driver[] = [
  {
    id: uuidv4(),
    name: 'Andrzej',
    surname: 'Jaworski',
    gender: DriverGender.Man,
    age: 48,
    city: 'Ogrodzieniec',
    car: {
      vendor: 'Skoda',
      model: 'Octavia',
      color: 'srebrny',
      boardNumber: 'SZA 07070',
    },
    description: '',
    ranking: 5,
    destinationCodes: [
      DestinationCode.ZOZ,
      DestinationCode.LEK,
      DestinationCode.STO,
      DestinationCode.OPT,
      DestinationCode.APT,
      DestinationCode.ZDR,
    ],
    preferenceCodes: [
      PreferenceCode.PickUpFrom,
      PreferenceCode.DeliverTo,
      PreferenceCode.WheelChair,
      PreferenceCode.AmplyObia,
      PreferenceCode.Deafness,
      PreferenceCode.Talkative,
    ],
    availabilityRanges: [
      {
        from: '2023-08-01T00:00',
        to: '2023-11-01T00:00',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Monika',
    surname: 'Zakrzewska',
    gender: DriverGender.Woman,
    age: 32,
    city: 'Podzamcze',
    car: {
      vendor: 'Nissan',
      model: 'Micra',
      color: 'złoty',
      boardNumber: 'SZA 44344',
    },
    description: '',
    ranking: 3,
    destinationCodes: [DestinationCode.ZOZ],
    preferenceCodes: [
      PreferenceCode.PickUpFrom,
      PreferenceCode.DeliverTo,
      PreferenceCode.Talkative,
    ],
    availabilityRanges: [
      {
        from: '2023-08-01T00:00',
        to: '2023-11-01T00:00',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Ariel',
    surname: 'Szymański',
    gender: DriverGender.Man,
    age: 38,
    city: 'Myszków',
    car: {
      vendor: 'BMW',
      model: 'X5',
      color: 'biały',
      boardNumber: 'SMY 12321',
    },
    description: '',
    ranking: 5,
    destinationCodes: [
      DestinationCode.ZOZ,
      DestinationCode.LEK,
      DestinationCode.APT,
      DestinationCode.ZDR,
    ],
    preferenceCodes: [
      PreferenceCode.PickUpFrom,
      PreferenceCode.DeliverTo,
      PreferenceCode.WheelChair,
      PreferenceCode.AmplyObia,
      PreferenceCode.Deafness,
    ],
    availabilityRanges: [
      {
        from: '2023-08-01T00:00',
        to: '2023-09-16T00:00',
      },
      {
        from: '2023-10-01T00:00',
        to: '2023-11-01T00:00',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Irena',
    surname: 'Sadowska',
    gender: DriverGender.Woman,
    age: 64,
    city: 'Ryczów',
    car: {
      vendor: 'Opel',
      model: 'Astra',
      color: 'żółty',
      boardNumber: 'SZA 55685',
    },
    description: '',
    ranking: 4,
    destinationCodes: [DestinationCode.APT, DestinationCode.ZDR],
    preferenceCodes: [
      PreferenceCode.WheelChair,
      PreferenceCode.AmplyObia,
      PreferenceCode.Deafness,
      PreferenceCode.Talkative,
    ],
    availabilityRanges: [
      {
        from: '2023-08-01T00:00',
        to: '2023-09-09T00:00',
      },
      {
        from: '2023-09-23T00:00',
        to: '2023-11-01T00:00',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Robert',
    surname: 'Sikorski',
    gender: DriverGender.Man,
    age: 58,
    city: 'Łazy',
    car: {
      vendor: 'Nissan',
      model: 'Qashqai',
      color: 'szary',
      boardNumber: 'SZA 92899',
    },
    description: '',
    ranking: 4,
    destinationCodes: [
      DestinationCode.ZOZ,
      DestinationCode.LEK,
      DestinationCode.STO,
      DestinationCode.OPT,
    ],
    preferenceCodes: [
      PreferenceCode.PickUpFrom,
      PreferenceCode.DeliverTo,
      PreferenceCode.WheelChair,
      PreferenceCode.Talkative,
    ],
    availabilityRanges: [
      {
        from: '2023-08-01T00:00',
        to: '2023-09-09T00:00',
      },
      {
        from: '2023-09-16T00:00',
        to: '2023-11-01T00:00',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Kornel',
    surname: 'Chmielewski',
    gender: DriverGender.Man,
    age: 22,
    city: 'Ogrodzieniec',
    car: {
      vendor: 'Cupra',
      model: 'Formentor',
      color: 'szary',
      boardNumber: 'SZA 88765',
    },
    description: '',
    ranking: 5,
    destinationCodes: [
      DestinationCode.ZOZ,
      DestinationCode.LEK,
      DestinationCode.STO,
      DestinationCode.OPT,
      DestinationCode.APT,
      DestinationCode.ZDR,
    ],
    preferenceCodes: [
      PreferenceCode.PickUpFrom,
      PreferenceCode.DeliverTo,
      PreferenceCode.WheelChair,
      PreferenceCode.AmplyObia,
      PreferenceCode.Deafness,
      PreferenceCode.Talkative,
    ],
    availabilityRanges: [
      {
        from: '2023-08-01T00:00',
        to: '2023-09-16T00:00',
      },
      {
        from: '2023-09-23T00:00',
        to: '2023-11-01T00:00',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Aleksandra',
    surname: 'Jakubowska',
    gender: DriverGender.Woman,
    age: 26,
    city: 'Pilica',
    car: {
      vendor: 'Nissan',
      model: 'Juke',
      color: 'niebieski',
      boardNumber: 'SZA 66345',
    },
    description: '',
    ranking: 4,
    destinationCodes: [
      DestinationCode.ZOZ,
      DestinationCode.LEK,
      DestinationCode.APT,
      DestinationCode.ZDR,
    ],
    preferenceCodes: [PreferenceCode.AmplyObia, PreferenceCode.Deafness],
    availabilityRanges: [
      {
        from: '2023-08-01T00:00',
        to: '2023-09-23T00:00',
      },
      {
        from: '2023-10-01T00:00',
        to: '2023-11-01T00:00',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Róża',
    surname: 'Mazurek',
    gender: DriverGender.Woman,
    age: 44,
    city: 'Olkusz',
    car: {
      vendor: 'Opel',
      model: 'Corsa',
      color: 'czerwony',
      boardNumber: 'KOL 86568',
    },
    description: '',
    ranking: 4,
    destinationCodes: [DestinationCode.ZOZ, DestinationCode.LEK],
    preferenceCodes: [
      PreferenceCode.PickUpFrom,
      PreferenceCode.DeliverTo,
      PreferenceCode.Talkative,
    ],
    availabilityRanges: [
      {
        from: '2023-08-01T00:00',
        to: '2023-09-01T00:00',
      },
      {
        from: '2023-10-01T00:00',
        to: '2023-11-01T00:00',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Franciszek',
    surname: 'Szewczyk',
    gender: DriverGender.Man,
    age: 34,
    city: 'Ogrodzieniec',
    car: {
      vendor: 'Skoda',
      model: 'Octavia',
      color: 'biały',
      boardNumber: 'SZA 33789',
    },
    description: '',
    ranking: 5,
    destinationCodes: [
      DestinationCode.ZOZ,
      DestinationCode.LEK,
      DestinationCode.STO,
      DestinationCode.OPT,
      DestinationCode.APT,
      DestinationCode.ZDR,
    ],
    preferenceCodes: [
      PreferenceCode.PickUpFrom,
      PreferenceCode.DeliverTo,
      PreferenceCode.WheelChair,
      PreferenceCode.AmplyObia,
      PreferenceCode.Deafness,
    ],
    availabilityRanges: [
      {
        from: '2023-08-01T00:00',
        to: '2023-10-01T00:00',
      },
      {
        from: '2023-11-01T00:00',
        to: '2023-11-01T00:00',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Łucja',
    surname: 'Kwiatkowska',
    gender: DriverGender.Woman,
    age: 24,
    city: 'Ogrodzieniec',
    car: {
      vendor: 'Fiat',
      model: '500',
      color: 'żółty',
      boardNumber: 'SZA 76567',
    },
    description: '',
    ranking: 5,
    destinationCodes: [
      DestinationCode.ZOZ,
      DestinationCode.LEK,
      DestinationCode.STO,
      DestinationCode.OPT,
      DestinationCode.APT,
      DestinationCode.ZDR,
    ],
    preferenceCodes: [
      PreferenceCode.PickUpFrom,
      PreferenceCode.DeliverTo,
      PreferenceCode.AmplyObia,
      PreferenceCode.Deafness,
      PreferenceCode.Talkative,
    ],
    availabilityRanges: [
      {
        from: '2023-08-01T00:00',
        to: '2023-11-01T00:00',
      },
    ],
  },
];
