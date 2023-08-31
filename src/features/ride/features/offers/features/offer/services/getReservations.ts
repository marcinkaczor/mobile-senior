import { Reservation } from '@mobileSenior/types/reservation';
import { RideOffer } from '@mobileSenior/types/rideOffer';
import { uuidv4 } from '@mobileSenior/utils/uuidv4';

export function getReservations(
  reservations: Reservation[],
  rideOffers: RideOffer[],
  driverId: string,
) {
  return new Promise<Reservation[]>((resolve) => {
    setTimeout(() => {
      const rideOffer = rideOffers.find(
        (rideOffer) => rideOffer.driverId === driverId,
      );

      if (!rideOffer) {
        resolve(reservations);
      } else {
        const reservation: Reservation = {
          id: uuidv4(),
          ...rideOffer,
        };

        resolve(reservations.concat(reservation));
      }
    }, 500);
  });
}
