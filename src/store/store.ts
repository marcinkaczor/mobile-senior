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
  setRideQueryPreferenceId: (preferenceId?: string) => void;
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

  const setRideQueryPreferenceId = useCallback(
    (preferenceId?: string) =>
      setState((prevState) => ({
        ...prevState,
        rideQuery: { ...prevState.rideQuery, preferenceId },
      })),
    [],
  );

  return useMemo(
    () => ({
      state,

      setRideQueryDestinationId,
      setRideQueryArrivalDateTime,
      setRideQueryDepartureDateTime,
      setRideQueryPreferenceId,
    }),
    [
      state,
      setRideQueryDestinationId,
      setRideQueryArrivalDateTime,
      setRideQueryDepartureDateTime,
      setRideQueryPreferenceId,
    ],
  );
};
