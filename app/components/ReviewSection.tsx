import StarRating from "./StarRating";

export default function ReviewSection({
  reviewScoreRating,
  numberOfReviews,
}: {
  reviewScoreRating: number;
  numberOfReviews: number;
}) {
  return (
    <StarRating rating={reviewScoreRating} numberOfReviews={numberOfReviews} />
  );
}
