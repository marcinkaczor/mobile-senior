import { DRIVERS } from '@mobileSenior/constants/driver';
import { getDriverOffers } from '@mobileSenior/features/ride/features/offers/services/getDriverOffers';
import { useApplicationContext } from '@mobileSenior/store/context';
import { QueryStatus } from '@mobileSenior/utils/queryStatus';
import { useCallback } from 'react';

export const usePublishCommand = () => {
  const {
    state: {
      user: { name, surname },
      driverOffers: { results: driverOffers },
      rideQuery,
    },
    setDriverOffers,
  } = useApplicationContext();

  return useCallback(async () => {
    setDriverOffers(QueryStatus.InProgress);

    const driver = DRIVERS.find(
      (driver) => driver.name === name && driver.surname === surname,
    );

    if (!driver) {
      return;
    }

    const results = await getDriverOffers(driverOffers, rideQuery, driver);

    setDriverOffers(QueryStatus.Success, results);
  }, [name, surname, driverOffers, rideQuery, setDriverOffers]);
};
