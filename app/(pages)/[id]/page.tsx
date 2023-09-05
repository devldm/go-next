import Image from "next/image";
import StarRating from "@/app/components/StarRating";
import SeparatorDot from "@/app/components/SeparatorDot";
import ShowMoreWrapper from "@/app/components/ShowMoreWrapper";
import AmenitiesList from "@/app/components/AmenitiesList";
import ReviewSection from "@/app/components/ReviewSection";
import Map from "@/app/components/Map";
import { Listing } from "@/types";
import HostedByAccommodation from "@/app/components/HostedByAccommodation";
import { getData } from "@/utils/getData";

export default async function Page({ params }: { params: { id: string } }) {
  const listingDetails: Listing = await getData(params.id);

  return (
    <div className="p-6 mt-7 flex flex-col items-center md:w-5/6 md:mx-auto lg:max-w-5xl">
      {listingDetails ? (
        <div className="flex flex-col items-start">
          <p className="text-3xl mb-3">{listingDetails.name}</p>
          <div className="flex flex-row mb-3">
            {listingDetails.number_of_reviews !== null &&
              listingDetails.number_of_reviews > 0 && (
                // TODO: look into cleaning up this type and not using
                <>
                  <StarRating
                    rating={listingDetails.review_scores!.review_scores_rating!}
                    numberOfReviews={listingDetails.number_of_reviews}
                  />
                  <SeparatorDot />
                </>
              )}
            <div className="flex">
              <p className="min-w-max font-bold">
                {listingDetails.address?.street}
              </p>
            </div>
          </div>
          {listingDetails.images?.picture_url && (
            <Image
              src={listingDetails.images.picture_url}
              alt="image"
              className="w-full rounded-lg p-0"
              width={700}
              height={700}
            />
          )}
          <br />
          <HostedByAccommodation
            room_type={listingDetails.room_type!}
            host_name={listingDetails.host?.host_name!}
            accommodates={listingDetails.accommodates!}
            bedrooms={listingDetails.bedrooms!}
            beds={listingDetails.beds!}
            bathrooms={listingDetails.bathrooms!}
          />
          <br />
          <ShowMoreWrapper
            maxCharacterCount={247}
            text={listingDetails.description!}
          />
          <AmenitiesList amenities={listingDetails.amenities!} />
          {listingDetails.number_of_reviews &&
          listingDetails.number_of_reviews !== 0 ? (
            <ReviewSection
              reviewScoreRating={
                listingDetails.review_scores!.review_scores_rating!
              }
              numberOfReviews={listingDetails.number_of_reviews}
              reviews={listingDetails.reviews!}
            />
          ) : null}
          <Map
            coords={listingDetails.address?.location?.coordinates!}
            listingDetails={listingDetails}
          />
        </div>
      ) : (
        <h1>no data</h1>
      )}
    </div>
  );
}
