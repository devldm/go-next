import { reviewsObj } from "@/types";
import StarRating from "./StarRating";
import Review from "./Review";

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
        {/* <div className="grid grid-rows-1 overflow-x-scroll grid-flow-row overflow-y-hidden w-full"> */}
        {reviews.map((review) => (
          <Review review={review} key={review.ID} />
        ))}
      </div>
    </div>
  );
}
