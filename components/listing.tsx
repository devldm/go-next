import { Listing } from "@/types";
import Image from "next/image";
import StarRating from "./StarRating";

interface ListingProps {
  listingProps: Listing;
}

export default function Listing({ listingProps }: ListingProps) {
  return (
    <div className="group flex flex-initial flex-col text-left rounded-lg border border-transparent w-min-content px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <a href={`pages/${listingProps.ID}`}>
        {listingProps.images?.picture_url && (
          <div className="w-full h-96 relative">
            <Image
              src={listingProps.images.picture_url}
              alt="image"
              className="rounded-lg w-full"
              objectFit="cover"
              fill={true}
            />
          </div>
        )}
        <p className="font-bold text-md mt-2">{listingProps.address?.street}</p>
        <h2 className={`m-0 max-w-[30ch] text-lg opacity-100 mt-0`}>
          {listingProps.name}
        </h2>
        {/* <p>Beds: {listingProps.beds}</p>
        <p>Accommodates: {listingProps.accommodates}</p> */}
        {listingProps.review_scores?.review_scores_rating && (
          <StarRating
            rating={listingProps.review_scores.review_scores_rating}
          />
        )}
      </a>
    </div>
  );
}
