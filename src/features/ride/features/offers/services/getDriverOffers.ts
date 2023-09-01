import { Driver } from '@mobileSenior/constants/driver';
import { RideOffer, RideOfferVariant } from '@mobileSenior/types/rideOffer';
import { RideQuery } from '@mobileSenior/types/rideQuery';

export function getDriverOffers(
  driverOffers: RideOffer[],
  rideQuery: RideQuery,
  driver: Driver,
) {
  return new Promise<RideOffer[]>((resolve) => {
    setTimeout(() => {
      const offers: RideOffer[] = [
        ...driverOffers,
        {
          driverId: driver.id,
          arrivalDateTime: rideQuery.arrivalDateTime,
          departureDateTime: rideQuery.departureDateTime,
          destinationIds: rideQuery.destinations.map(
            (destination) => destination.id,
          ),
          preferenceIds: rideQuery.preferences.map(
            (preference) => preference.id,
          ),
          price: driver.ranking * 10,
          variant: RideOfferVariant.Typed,
        },
      ];

      resolve(offers);
    }, 500);
  });
}
