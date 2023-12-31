"use client";

import { Listing } from "@/types";
import Image from "next/image";
import StarRating from "./StarRating";
import { useContext } from "react";
import { LocationContext } from "../locationProvider";
import { getDistanceFromUser } from "@/utils/getDistanceFromUser";

export default function Listing({ listingProps }: { listingProps: Listing }) {
  const location = useContext(LocationContext);
  return (
    <div className="group flex flex-initial flex-col text-left rounded-lg border border-transparent w-min-content px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <a href={`/${listingProps.ID}`}>
        {listingProps.images?.picture_url && (
          <div className="w-full h-96 relative">
            <Image
              src={listingProps.images.picture_url}
              alt="image"
              className="rounded-lg w-full object-cover"
              fill={true}
            />
          </div>
        )}
        <div className="flex flex-row items-center mt-2.5 justify-between">
          <p className="font-bold text-md">{listingProps.address?.street}</p>
          {listingProps.number_of_reviews !== null &&
            listingProps.number_of_reviews > 0 &&
            listingProps.review_scores?.review_scores_rating && (
              // TODO: look at way to minise the conditional rendering above
              <StarRating
                rating={listingProps.review_scores.review_scores_rating}
              />
            )}
        </div>
        {location && listingProps.address?.location?.coordinates && (
          <p className="text-sm text-gray-300">
            {`${getDistanceFromUser(
              location as GeolocationCoordinates,
              listingProps.address.location.coordinates
            )} kilometers away`}
          </p>
        )}
        {listingProps.price && (
          <p className="mt-1">{`$${listingProps.price} / night`}</p>
        )}
      </a>
    </div>
  );
}
