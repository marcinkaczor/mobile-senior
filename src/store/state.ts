import { User, UserRole } from '@mobileSenior/constants/user';
import { Reservation } from '@mobileSenior/types/reservation';
import { RideOffer } from '@mobileSenior/types/rideOffer';
import { RideQuery } from '@mobileSenior/types/rideQuery';
import { QueryStatus } from '@mobileSenior/utils/queryStatus';

export interface ApplicationState {
  logged: boolean;
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
  driverOffers: {
    queryStatus: QueryStatus;
    results: RideOffer[];
  };
}

export const getDefaultApplicationState = (): ApplicationState => {
  return {
    logged: false,
    user: {
      name: '',
      surname: '',
      email: '',
      street: '',
      commune: '',
      district: '',
      postalCode: '',
      about: '',
      role: UserRole.None,
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
    driverOffers: {
      queryStatus: QueryStatus.Initial,
      results: [],
    },
  };
};
