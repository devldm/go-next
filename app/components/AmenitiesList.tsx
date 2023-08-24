export default function AmenitiesList({ amenities }: { amenities: string[] }) {
  return amenities.map((amenity) => <p key={amenity}>amenity</p>);
}
