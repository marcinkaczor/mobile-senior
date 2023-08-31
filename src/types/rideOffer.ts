export interface RideOffer {
  driverId: string;
  destinationIds: string[];
  arrivalDateTime: string;
  departureDateTime: string;
  preferenceIds: string[];
  price: number;
}
