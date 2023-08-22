import { percentToStars } from "@/utils/star";
import StarIcon from "./StarIcon";

export default function StarRating({ rating }: { rating: number }) {
  let starRating = percentToStars(rating);

  return (
    <div className="flex flex-row items-center">
      <StarIcon />
      <p>{starRating}</p>
    </div>
  );
}
