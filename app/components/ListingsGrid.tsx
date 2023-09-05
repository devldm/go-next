import Listing from "./Listing";
import { Listing as ListingType } from "../../types";
import { getData } from "@/utils/getData";

export default async function ListingsGrid() {
  const data: ListingType[] = await getData();

  return (
    <div className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 lg:mb-0 lg:text-left">
      {data && (
        <>
          {data.map((listing: ListingType) => (
            <Listing key={listing.ID} listingProps={listing} />
          ))}
        </>
      )}
    </div>
  );
}
