import { Offer } from '@mobileSenior/features/rides/features/offers/features/offer/Offer';

export function Offers() {
  return [...Array(5)].map((_, index) => <Offer key={index} />);
}
