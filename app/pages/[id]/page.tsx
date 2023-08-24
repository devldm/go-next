import Image from "next/image";
import StarRating from "@/app/components/StarRating";
import SeparatorDot from "@/app/components/SeparatorDot";
import ShowMoreWrapper from "@/app/components/ShowMoreWrapper";
import AmenitiesList from "@/app/components/AmenitiesList";
import ReviewSection from "@/app/components/ReviewSection";
import { list } from "postcss";

export async function getData(id: string) {
  const res = await fetch(
    `http://127.0.0.1:3000/api/listings/${encodeURIComponent(id)}`
  );
  if (!res.ok) {
    console.error("oops");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const listingDetails = await getData(params.id);

  return (
    <div className="w-full p-3 mt-7 flex flex-col items-center md:w-5/6 md:mx-auto lg:max-w-5xl">
      {listingDetails ? (
        <div className="flex flex-col items-start">
          <p className="text-3xl mb-3">{listingDetails.name}</p>
          <div className="flex flex-row md:space-x-5 mb-3">
            {listingDetails.number_of_reviews !== null &&
              listingDetails.number_of_reviews > 0 && (
                // TODO: look into cleaning up this type and not using !
                <StarRating
                  rating={listingDetails.review_scores!.review_scores_rating!}
                  numberOfReviews={listingDetails.number_of_reviews}
                />
              )}
            <SeparatorDot />
            <div className="flex">
              <p className="min-w-max">{listingDetails.address?.street}</p>
            </div>
          </div>
          {listingDetails.images?.picture_url && (
            <Image
              src={listingDetails.images.picture_url}
              alt="image"
              className="w-min rounded-lg"
              width={700}
              height={700}
            />
          )}
          <br />
          <h1 className="text-2xl">{`${listingDetails.room_type} hosted by ${listingDetails.host?.host_name}`}</h1>
          <div className="flex">
            <p>{`${listingDetails.accommodates} guests`}</p>
            <SeparatorDot />
            <p>{`${listingDetails.bedrooms} bedrooms`}</p>
            <SeparatorDot />
            <p>{`${listingDetails.beds} beds`}</p>
            <SeparatorDot />
            <p>{`${Math.floor(listingDetails.bathrooms)} baths`}</p>
          </div>
          <br />
          <ShowMoreWrapper
            maxCharacterCount={247}
            text={listingDetails.description}
          />
          <AmenitiesList amenities={listingDetails.amenities} />
          <ReviewSection
            reviewScoreRating={
              listingDetails.review_scores!.review_scores_rating!
            }
            numberOfReviews={listingDetails.number_of_reviews}
          />
        </div>
      ) : (
        <h1>no data</h1>
      )}
    </div>
  );
}
