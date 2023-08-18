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
    <div className="w-full p-3 mt-7 flex flex-col items-center md:w-5/6 md:mx-auto">
      {listingDetails ? (
        <div className="flex flex-col items-start">
          <p className="text-3xl mb-3">{listingDetails.name}</p>
          <div className="flex flex-col md:flex-row md:space-x-5 mb-3">
            <div className="flex">
              <p className="min-w-max">{listingDetails.address?.street}</p>
              <span className="mx-2 block">·</span>
            </div>
            <p className="min-w-max">{`${listingDetails?.review_scores?.review_scores_rating}% - ${listingDetails.number_of_reviews} reviews`}</p>
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
            <span className="mx-1">·</span>
            <p>{`${listingDetails.bedrooms} bedrooms`}</p>
            <span className="mx-1">·</span>
            <p>{`${listingDetails.beds} beds`}</p>
          </div>
          <br />
          <h1 className="">{listingDetails.description}</h1>
        </div>
      ) : (
        <h1>no data</h1>
      )}
    </div>
  );
}
