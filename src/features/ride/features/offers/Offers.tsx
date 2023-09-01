import { Offer } from '@mobileSenior/features/ride/features/offers/features/offer/Offer';
import { useApplicationContext } from '@mobileSenior/store/context';
import { QueryStatus } from '@mobileSenior/utils/queryStatus';
import { Typography } from '@mui/joy';

export function Offers() {
  const {
    state: {
      rideOffers: { queryStatus, results: rideOffers },
    },
  } = useApplicationContext();

  if (queryStatus === QueryStatus.Success && !rideOffers.length) {
    return (
      <Typography level="body1">Brak ofert dla wybranych kryteriów</Typography>
    );
  }

  return rideOffers.map((rideOffer) => (
    <Offer key={rideOffer.driverId} rideOffer={rideOffer} reserved={false} />
  ));
}
