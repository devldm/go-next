import { locationObj } from "@/types";
import ShowMoreWrapper from "./ShowMoreWrapper";

export default function Map({
  coordinates,
  listingDetails,
}: {
  coordinates: locationObj;
  listingDetails: any;
}) {
  let coordinateStringValue = `${coordinates[0].toString()},${coordinates[1].toString()}`;

  return (
    <div className="w-full mt-4 mb-20 h-full">
      <p className="text-2xl font-semibold mb-3">{`Where you'll be`}</p>
      <iframe
        className="w-full"
        height={400}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/view?key=${process.env.GMAPS_API_KEY}&center=${coordinateStringValue}&zoom=18`}
      ></iframe>
      <p className="font-bold mt-6">{listingDetails.address.street}</p>
      <ShowMoreWrapper
        maxCharacterCount={137}
        text={listingDetails.neighborhood_overview}
      />
    </div>
  );
}
