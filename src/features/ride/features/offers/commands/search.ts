import { getRideOffers } from '@mobileSenior/features/ride/features/offers/services/getRideOffers';
import { useApplicationContext } from '@mobileSenior/store/context';
import { QueryStatus } from '@mobileSenior/utils/queryStatus';
import { useCallback } from 'react';

export const useSearchCommand = () => {
  const {
    state: {
      rideQuery,
      driverOffers: { results: driverOffers },
    },
    setRideOffers,
  } = useApplicationContext();

  return useCallback(async () => {
    setRideOffers(QueryStatus.InProgress);

    const results = await getRideOffers(driverOffers, rideQuery);

    setRideOffers(QueryStatus.Success, results);
  }, [rideQuery, driverOffers, setRideOffers]);
};
