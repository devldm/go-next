import SeparatorDot from "./SeparatorDot";

export default function HostedByAccommodation({
  room_type,
  host_name,
  accommodates,
  bedrooms,
  beds,
  bathrooms,
}: {
  room_type: string;
  host_name: string;
  accommodates: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}) {
  return (
    <>
      <h1 className="text-2xl">{`${room_type} hosted by ${host_name}`}</h1>
      <div className="flex">
        <p>{`${accommodates} guests`}</p>
        <SeparatorDot />
        <p>{`${bedrooms} bedrooms`}</p>
        <SeparatorDot />
        <p>{`${beds} beds`}</p>
        <SeparatorDot />
        <p>{`${Math.floor(bathrooms!)} baths`}</p>
      </div>
    </>
  );
}
