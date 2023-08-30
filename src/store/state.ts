import { DestinationCode } from '@mobileSenior/constants/destination';
import { PreferenceCode } from '@mobileSenior/constants/preference';

export interface ApplicationState {
  user: {
    name: string;
    surname: string;
    email: string;
    street: string;
    commune: string;
    district: string;
    postalCode: string;
    about: string;
  };
  rides: {
    id: string;
    driverId: string;
    destinationCode: DestinationCode;
    preferenceCode: PreferenceCode;
    arrivalDateTime: string;
    departureDateTime: string;
  }[];
}

export const getDefaultApplicationState = (): ApplicationState => {
  return {
    user: {
      name: '',
      surname: '',
      email: '',
      street: '',
      commune: '',
      district: '',
      postalCode: '',
      about: '',
    },
    rides: [],
  };
};
