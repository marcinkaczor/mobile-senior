import { Destination } from '@mobileSenior/constants/destination';
import { Preference } from '@mobileSenior/constants/preference';
import {
  ApplicationState,
  getDefaultApplicationState,
} from '@mobileSenior/store/state';
import { Reservation } from '@mobileSenior/types/reservation';
import { RideOffer } from '@mobileSenior/types/rideOffer';
import { QueryStatus } from '@mobileSenior/utils/queryStatus';
import { useCallback, useMemo, useState } from 'react';

export interface ApplicationStore {
  state: ApplicationState;

  // reserve: (driverId: string) => void;
  setReservations: (queryStatus: QueryStatus, results?: Reservation[]) => void;
  clear: () => void;
  setRideOffers: (queryStatus: QueryStatus, results?: RideOffer[]) => void;
  setRideQueryDestinations: (destinations: Destination[]) => void;
  setRideQueryArrivalDateTime: (arrivalDateTime: string) => void;
  setRideQueryDepartureDateTime: (departureDateTime: string) => void;
  setRideQueryPreferences: (preferences: Preference[]) => void;
}

export const useCreateApplicationStore = (): ApplicationStore => {
  const [state, setState] = useState(getDefaultApplicationState());

  // const reserve = useCallback(
  //   (driverId: string) =>
  //     setState((prevState) => {
  //       const rideOffer = prevState.rideOffers.results.find(
  //         (rideOffer) => rideOffer.driverId === driverId,
  //       );

  //       if (!rideOffer) {
  //         return prevState;
  //       }

  //       return {
  //         ...prevState,
  //         reservations: [
  //           ...prevState.reservations,
  //           {
  //             id: uuidv4(),
  //             ...rideOffer,
  //           },
  //         ],
  //       };
  //     }),
  //   [],
  // );

  const setReservations = useCallback(
    (queryStatus: QueryStatus, results?: Reservation[]) =>
      setState((prevState) => ({
        ...prevState,
        reservations: {
          ...prevState.reservations,
          queryStatus,
          ...(results && { results }),
        },
      })),
    [],
  );

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

      // reserve,
      setReservations,
      clear,
      setRideOffers,
      setRideQueryDestinations,
      setRideQueryArrivalDateTime,
      setRideQueryDepartureDateTime,
      setRideQueryPreferences,
    }),
    [
      state,
      // reserve,
      setReservations,
      clear,
      setRideOffers,
      setRideQueryDestinations,
      setRideQueryArrivalDateTime,
      setRideQueryDepartureDateTime,
      setRideQueryPreferences,
    ],
  );
};
