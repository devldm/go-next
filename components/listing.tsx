import { Listing } from "@/types";
import Image from "next/image";

interface ListingProps {
  listingProps: Listing;
}

export default function Listing({ listingProps }: ListingProps) {
  return (
    <div className="group flex rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <a href={`pages/${listingProps.ID}`}>
        {listingProps.images?.picture_url && (
          <Image
            src={listingProps.images.picture_url}
            alt="image"
            className="w-min rounded-lg"
            width={300}
            height={300}
          />
        )}
        <h2 className={`m-0 max-w-[30ch] text-lg opacity-100 mt-3`}>
          {listingProps.name}
        </h2>
        <p>Beds: {listingProps.beds}</p>
        <p>Accommodates: {listingProps.accommodates}</p>
      </a>
    </div>
  );
}
