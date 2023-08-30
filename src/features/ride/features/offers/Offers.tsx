import { OFFER_ITEMS } from '@mobileSenior/features/ride/features/offers/constants/offerItems';
import { Offer } from '@mobileSenior/features/ride/features/offers/features/offer/Offer';

export function Offers() {
  return OFFER_ITEMS.map((offerItem) => (
    <Offer key={offerItem.id} item={offerItem} />
  ));
}
