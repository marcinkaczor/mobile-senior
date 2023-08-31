import { Offer } from '@mobileSenior/features/ride/features/offers/features/offer/Offer';
import { useApplicationContext } from '@mobileSenior/store/context';

export function Offers() {
  const {
    state: {
      rideOffers: { results: rideOffers },
    },
  } = useApplicationContext();

  return rideOffers.map((rideOffer) => (
    <Offer key={rideOffer.driverId} rideOffer={rideOffer} />
  ));
}
