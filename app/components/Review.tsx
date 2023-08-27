import { reviewsObj } from "@/types";
import ShowMoreWrapper from "./ShowMoreWrapper";
import { formatDate } from "@/utils/formatDate";

export default function Review({ review }: { review: reviewsObj }) {
  return (
    <div
      key={review.ID}
      className="border border-gray-400 my-5 mx-2.5 p-5 rounded-lg w-full shrink-0"
    >
      <ShowMoreWrapper maxCharacterCount={130} text={review.comments!} />
      <p className="text-md font-bold">{review?.reviewer_name}</p>
      <p>{formatDate(review.date!)}</p>
    </div>
  );
}
