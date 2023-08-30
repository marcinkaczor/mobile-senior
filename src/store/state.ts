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
    aboutMe: string;
  };
  reservations: {
    id: string;
    driverId: string;
    destinationCode: DestinationCode;
    preferenceCode: PreferenceCode;
    arrivalDateTime: string;
    departureDateTime: string;
  }[];
}
