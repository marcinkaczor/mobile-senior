import { DRIVERS } from '@mobileSenior/constants/driver';
import { RideOffer, RideOfferVariant } from '@mobileSenior/types/rideOffer';
import { RideQuery } from '@mobileSenior/types/rideQuery';

export function getRideOffers(driverOffers: RideOffer[], rideQuery: RideQuery) {
  return new Promise<RideOffer[]>((resolve) => {
    setTimeout(() => {
      const filteredDriverOffers = driverOffers.filter(
        (driverOffer) =>
          new Date(driverOffer.arrivalDateTime) <=
            new Date(rideQuery.arrivalDateTime) &&
          new Date(rideQuery.departureDateTime) <=
            new Date(driverOffer.departureDateTime) &&
          rideQuery.destinations
            .map((destination) => destination.id)
            .every((id) => driverOffer.destinationIds.includes(id)) &&
          rideQuery.preferences
            .map((preference) => preference.id)
            .every((id) => driverOffer.preferenceIds.includes(id)),
      );

      const filteredDrivers = DRIVERS.filter(
        (driver) =>
          driver.availabilityRanges.some(
            (availabilityRange) =>
              new Date(availabilityRange.from) <=
                new Date(rideQuery.arrivalDateTime) &&
              new Date(rideQuery.departureDateTime) <=
                new Date(availabilityRange.to),
          ) &&
          rideQuery.destinations
            .map((destination) => destination.code)
            .every((code) => driver.destinationCodes.includes(code)) &&
          rideQuery.preferences
            .map((preference) => preference.code)
            .every((code) => driver.preferenceCodes.includes(code)),
      );

      const filteredRideOffers: RideOffer[] = filteredDrivers.map((driver) => ({
        driverId: driver.id,
        arrivalDateTime: rideQuery.arrivalDateTime,
        departureDateTime: rideQuery.departureDateTime,
        destinationIds: rideQuery.destinations.map(
          (destination) => destination.id,
        ),
        preferenceIds: rideQuery.preferences.map((preference) => preference.id),
        price: driver.ranking * 10,
        variant: RideOfferVariant.Predefined,
      }));

      resolve([...filteredDriverOffers, ...filteredRideOffers]);
    }, 500);
  });
}
