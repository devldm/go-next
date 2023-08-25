import { percentToStars } from "@/utils/star";
import StarIcon from "./StarIcon";
import SeparatorDot from "./SeparatorDot";

export default function StarRating({
  rating,
  numberOfReviews,
  starIconHeight,
  fontSize,
}: {
  rating: number;
  numberOfReviews?: number;
  starIconHeight?: string;
  fontSize?: string;
}) {
  let starRating = percentToStars(rating);

  return (
    <div className={`flex flex-row items-center ${fontSize}`}>
      <StarIcon height={starIconHeight} />
      <p className="ml-1.5">{starRating}</p>
      {numberOfReviews && (
        <>
          <SeparatorDot />
          <p className="">{numberOfReviews} reviews</p>
        </>
      )}
    </div>
  );
}
