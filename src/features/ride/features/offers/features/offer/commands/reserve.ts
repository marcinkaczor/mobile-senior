import { getReservations } from '@mobileSenior/features/ride/features/offers/features/offer/services/getReservations';
import { useApplicationContext } from '@mobileSenior/store/context';
import { QueryStatus } from '@mobileSenior/utils/queryStatus';
import { useCallback } from 'react';

export const useReserveCommand = () => {
  const {
    state: {
      reservations: { results: reservations },
      rideOffers: { results: rideOffers },
    },
    setReservations,
  } = useApplicationContext();

  return useCallback(
    async (driverId: string) => {
      setReservations(QueryStatus.InProgress);

      const results = await getReservations(reservations, rideOffers, driverId);

      setReservations(QueryStatus.Success, results);
    },
    [reservations, rideOffers, setReservations],
  );
};
