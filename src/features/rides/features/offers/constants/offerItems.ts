import { DestinationCode } from '@mobileSenior/constants/destination';
import { PreferenceCode } from '@mobileSenior/constants/preference';
import { v4 as uuidv4 } from 'uuid';

export interface OfferItem {
  id: string;
  driver: {
    id: string;
    name: string;
    surname: string;
    gender: 'M' | 'W';
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
  };
  price: {
    currency: 'PLN' | 'EUR' | 'USD';
    value: number;
  };
  destinationCodes: DestinationCode[];
  preferenceCodes: PreferenceCode[];
}

export const OFFER_ITEMS: OfferItem[] = [
  {
    id: uuidv4(),
    driver: {
      id: uuidv4(),
      name: 'Andrzej',
      surname: 'Pomocny',
      gender: 'M',
      age: 48,
      city: 'Ogrodzieniec',
      car: {
        vendor: 'Skoda',
        model: 'Octavia',
        color: 'srebrny',
        boardNumber: 'SZA 07070',
      },
      description:
        'Oferuję pomoc w odbiorze seniora z mieszkania i powrocie do niego. Przyjmę osobę z wózkiem inwalidzkim. Pomogę osobom niedowidzącym i niedosłyszącym. Jestem kontaktowy.',
      ranking: 5,
    },
    price: {
      currency: 'PLN',
      value: 26,
    },
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
  },
  {
    id: uuidv4(),
    driver: {
      id: uuidv4(),
      name: 'Monika',
      surname: 'Zakrzewska',
      gender: 'W',
      age: 32,
      city: 'Podzamcze',
      car: {
        vendor: 'Nissan',
        model: 'Micra',
        color: 'złoty',
        boardNumber: 'SZA 44344',
      },
      description:
        'Proszę się ze mną wcześniej skontaktować, gdyby była potrzeba pomocy w odbiorze z mieszkania i powrocie do niego. Jestem otwarta i rozmowna.',
      ranking: 2,
    },
    price: {
      currency: 'PLN',
      value: 30,
    },
    destinationCodes: [DestinationCode.ZOZ],
    preferenceCodes: [
      PreferenceCode.PickUpFrom,
      PreferenceCode.DeliverTo,
      PreferenceCode.Talkative,
    ],
  },
  {
    id: uuidv4(),
    driver: {
      id: uuidv4(),
      name: 'Ariel',
      surname: 'Szymański',
      gender: 'M',
      age: 38,
      city: 'Myszków',
      car: {
        vendor: 'BMW',
        model: 'X5',
        color: 'biały',
        boardNumber: 'SMY 12321',
      },
      description:
        'Oferuję możliwość pomocy w odbiorze z mieszkania i powrocie do niego. Gdyby była potrzeba, transport wózka inwalidzkiego jest możliwy. Pomogę osobom niedowidzącym i niedosłyszącym.',
      ranking: 5,
    },
    price: {
      currency: 'PLN',
      value: 34,
    },
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
  },
  {
    id: uuidv4(),
    driver: {
      id: uuidv4(),
      name: 'Irena',
      surname: 'Sadowska',
      gender: 'W',
      age: 64,
      city: 'Ryczów',
      car: {
        vendor: 'Opel',
        model: 'Astra',
        color: 'żółty',
        boardNumber: 'SZA 55685',
      },
      description:
        'Mam możliwość przyjęcia osoby wraz z wózkiem inwalidzkim. Pomogę osobom niedowidzącym i niedosłyszącym. Umilę wspólną podróż rozmową.',
      ranking: 3,
    },
    price: {
      currency: 'PLN',
      value: 30,
    },
    destinationCodes: [DestinationCode.APT, DestinationCode.ZDR],
    preferenceCodes: [
      PreferenceCode.WheelChair,
      PreferenceCode.AmplyObia,
      PreferenceCode.Deafness,
      PreferenceCode.Talkative,
    ],
  },
];
