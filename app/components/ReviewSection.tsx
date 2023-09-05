"use client";

import { reviewsObj } from "@/types";
import StarRating from "./StarRating";
import Review from "./Review";
import CustomButton from "./CustomButton";

export default function ReviewSection({
  reviewScoreRating,
  numberOfReviews,
  reviews,
}: {
  reviewScoreRating: number;
  numberOfReviews: number;
  reviews: reviewsObj[];
}) {
  return (
    <div className="grid">
      <StarRating
        rating={reviewScoreRating}
        numberOfReviews={numberOfReviews}
        starIconHeight="1em"
        fontSize="text-[22px]"
      />
      <div className="flex overflow-x-scroll flex-nowrap overflow-y-hidden w-full">
        {reviews.map((review) => (
          <Review review={review} key={review.ID} />
        ))}
      </div>
      <CustomButton
        classNames={`border border-gray-300 py-1 px-2 rounded-md text-lg my-1 w-full md:w-1/2`}
        text={`Show all ${reviews.length} reviews`}
        onClickFunc={() => {
          console.log("TODO: Implement function here to show <dialog>");
        }}
      />
    </div>
  );
}
