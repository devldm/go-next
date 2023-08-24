import { percentToStars } from "@/utils/star";
import StarIcon from "./StarIcon";
import SeparatorDot from "./SeparatorDot";

export default function StarRating({
  rating,
  numberOfReviews,
}: {
  rating: number;
  numberOfReviews?: number;
}) {
  let starRating = percentToStars(rating);

  return (
    <div className="flex flex-row items-center">
      <StarIcon />
      <p className="ml-1.5">{starRating}</p>
      {numberOfReviews && (
        <>
          <SeparatorDot />
          <p className="text-sm">{numberOfReviews} reviews</p>
        </>
      )}
    </div>
  );
}
