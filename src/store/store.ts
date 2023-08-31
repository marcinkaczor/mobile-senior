import { Preference } from '@mobileSenior/constants/preference';
import {
  ApplicationState,
  getDefaultApplicationState,
} from '@mobileSenior/store/state';
import { useCallback, useMemo, useState } from 'react';

export interface ApplicationStore {
  state: ApplicationState;

  setRideQueryDestinationId: (destinationId?: string) => void;
  setRideQueryArrivalDateTime: (arrivalDateTime?: string) => void;
  setRideQueryDepartureDateTime: (departureDateTime?: string) => void;
  setRideQueryPreferences: (preferences: Preference[]) => void;
}

export const useCreateApplicationStore = (): ApplicationStore => {
  const [state, setState] = useState(getDefaultApplicationState());

  const setRideQueryDestinationId = useCallback(
    (destinationId?: string) =>
      setState((prevState) => ({
        ...prevState,
        rideQuery: { ...prevState.rideQuery, destinationId },
      })),
    [],
  );

  const setRideQueryArrivalDateTime = useCallback(
    (arrivalDateTime?: string) =>
      setState((prevState) => ({
        ...prevState,
        rideQuery: { ...prevState.rideQuery, arrivalDateTime },
      })),
    [],
  );

  const setRideQueryDepartureDateTime = useCallback(
    (departureDateTime?: string) =>
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

      setRideQueryDestinationId,
      setRideQueryArrivalDateTime,
      setRideQueryDepartureDateTime,
      setRideQueryPreferences,
    }),
    [
      state,
      setRideQueryDestinationId,
      setRideQueryArrivalDateTime,
      setRideQueryDepartureDateTime,
      setRideQueryPreferences,
    ],
  );
};
