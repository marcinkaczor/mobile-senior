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
    destinationId: string;
    arrivalDateTime: string;
    departureDateTime: string;
    preferenceId: string;
  }[];
  rideQuery: {
    destinationId?: string;
    arrivalDateTime?: string;
    departureDateTime?: string;
    preferenceId?: string;
  };
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
    rideQuery: {},
  };
};
