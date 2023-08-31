import { Destination } from '@mobileSenior/constants/destination';
import { Preference } from '@mobileSenior/constants/preference';
import {
  ApplicationState,
  getDefaultApplicationState,
} from '@mobileSenior/store/state';
import { RideOffer } from '@mobileSenior/types/rideOffer';
import { QueryStatus } from '@mobileSenior/utils/queryStatus';
import { useCallback, useMemo, useState } from 'react';

export interface ApplicationStore {
  state: ApplicationState;

  clear: () => void;
  setRideOffers: (queryStatus: QueryStatus, results?: RideOffer[]) => void;
  setRideQueryDestinations: (destinations: Destination[]) => void;
  setRideQueryArrivalDateTime: (arrivalDateTime: string) => void;
  setRideQueryDepartureDateTime: (departureDateTime: string) => void;
  setRideQueryPreferences: (preferences: Preference[]) => void;
}

export const useCreateApplicationStore = (): ApplicationStore => {
  const [state, setState] = useState(getDefaultApplicationState());

  const clear = useCallback(
    () =>
      setState((prevState) => ({
        ...prevState,
        rideOffers: getDefaultApplicationState().rideOffers,
        rideQuery: getDefaultApplicationState().rideQuery,
      })),
    [],
  );

  const setRideOffers = useCallback(
    (queryStatus: QueryStatus, results?: RideOffer[]) =>
      setState((prevState) => ({
        ...prevState,
        rideOffers: {
          ...prevState.rideOffers,
          queryStatus,
          ...(results && { results }),
        },
      })),
    [],
  );

  const setRideQueryDestinations = useCallback(
    (destinations: Destination[]) =>
      setState((prevState) => ({
        ...prevState,
        rideQuery: { ...prevState.rideQuery, destinations },
      })),
    [],
  );

  const setRideQueryArrivalDateTime = useCallback(
    (arrivalDateTime: string) =>
      setState((prevState) => ({
        ...prevState,
        rideQuery: { ...prevState.rideQuery, arrivalDateTime },
      })),
    [],
  );

  const setRideQueryDepartureDateTime = useCallback(
    (departureDateTime: string) =>
      setState((prevState) => ({
        ...prevState,
        rideQuery: { ...prevState.rideQuery, departureDateTime },
      })),
    [],
  );

  const setRideQueryPreferences = useCallback(
    (preferences: Preference[]) =>
      setState((prevState) => ({
        ...prevState,
        rideQuery: {
          ...prevState.rideQuery,
          preferences,
        },
      })),
    [],
  );

  return useMemo(
    () => ({
      state,

      clear,
      setRideOffers,
      setRideQueryDestinations,
      setRideQueryArrivalDateTime,
      setRideQueryDepartureDateTime,
      setRideQueryPreferences,
    }),
    [
      state,
      clear,
      setRideOffers,
      setRideQueryDestinations,
      setRideQueryArrivalDateTime,
      setRideQueryDepartureDateTime,
      setRideQueryPreferences,
    ],
  );
};
