import { Destination } from '@mobileSenior/constants/destination';
import { Preference } from '@mobileSenior/constants/preference';

export interface RideQuery {
  destinations: Destination[];
  arrivalDateTime: string;
  departureDateTime: string;
  preferences: Preference[];
}
