import { Reservation } from '@mobileSenior/types/reservation';
import { RideOffer } from '@mobileSenior/types/rideOffer';
import { RideQuery } from '@mobileSenior/types/rideQuery';
import { User } from '@mobileSenior/types/user';
import { QueryStatus } from '@mobileSenior/utils/queryStatus';

export interface ApplicationState {
  user: User;
  reservations: {
    queryStatus: QueryStatus;
    results: Reservation[];
  };
  rideOffers: {
    queryStatus: QueryStatus;
    results: RideOffer[];
  };
  rideQuery: RideQuery;
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
      ridesUsed: 2,
      ridesTotal: 3,
    },
    reservations: {
      queryStatus: QueryStatus.Initial,
      results: [],
    },
    rideOffers: {
      queryStatus: QueryStatus.Initial,
      results: [],
    },
    rideQuery: {
      destinations: [],
      arrivalDateTime: '2023-09-01T11:00',
      departureDateTime: '2023-09-01T13:00',
      preferences: [],
    },
  };
};
