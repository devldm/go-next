"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";

export default function AmenitiesList({ amenities }: { amenities: string[] }) {
  const [showAll, setShowAll] = useState(false);

  let listOfAmenities = amenities;

  if (amenities.length > 10 && showAll === false) {
    // TODO: only show 6 on mobile - 10 on desktop
    listOfAmenities = amenities.slice(0, 6);
  } else {
    listOfAmenities = amenities;
  }

  return (
    <div className="text-left py-6 w-full">
      <p className="text-2xl font-semibold mb-3">What this place offers</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 g-x-6">
        {listOfAmenities.map((amenity) => (
          <p key={amenity} className="mr-6 text-lg">
            {amenity}
          </p>
        ))}
      </div>
      <CustomButton
        classNames={`border border-gray-300 py-2 px-2 rounded-md text-lg mb-4 mt-6 w-full md:w-1/2`}
        text={
          !showAll
            ? `Show all ${amenities.length} amenities`
            : `Show less amenities`
        }
        onClickFunc={() => setShowAll(!showAll)}
      />
    </div>
  );
}
