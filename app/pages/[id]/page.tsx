import Image from "next/image";

export async function getData(id: string) {
  const res = await fetch(
    `http://127.0.0.1:3000/listings/${encodeURIComponent(id)}`
  );
  if (!res.ok) {
    console.error("oops");
  }

  console.log(res);

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const listingDetails = await getData(params.id);
  return (
    <>
      {listingDetails ? (
        <>
          <h1>{listingDetails.name}</h1>
          <h1>{listingDetails.address?.street}</h1>
          <h1>{`${listingDetails?.review_scores?.review_scores_rating}% - ${listingDetails.number_of_reviews} reviews`}</h1>
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
          <h1>{`${listingDetails.room_type} hosted by ${listingDetails.host?.host_name}`}</h1>
          <h1>{`${listingDetails.accommodates} guests | ${listingDetails.bedrooms} bedrooms | ${listingDetails.beds} beds`}</h1>
          <br />

          <h1>{listingDetails.description}</h1>
        </>
      ) : (
        <h1>no data</h1>
      )}
    </>
  );
}
