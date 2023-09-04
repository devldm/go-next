import Listing from "./Listing";

async function getData() {
  //TODO: use the below commented code when fetching data from API locally
  //const res = await fetch("http://127.0.0.1:3000/api/listings/");
  const res = await fetch("https://go-mongo-airbnb.onrender.com/api/listings/");

  console.log(res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ListingsGrid() {
  const data: (typeof Listing)[] = await getData();
  return (
    <div className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 lg:mb-0 lg:text-left">
      {data && (
        <>
          {data.map((listing: any) => (
            <Listing key={listing.id} listingProps={listing} />
          ))}
        </>
      )}
    </div>
  );
}
