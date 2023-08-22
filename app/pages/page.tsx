import Listing from "@/components/listing";

async function getData() {
  const res = await fetch("http://127.0.0.1:3000/api/listings/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex mb-5 pb-16 md:pb-0">
        <p className="fixed left-0 top-0 mb-5 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Listings
        </p>
      </div>

      <div className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 lg:mb-0 lg:text-left">
        {data && (
          <>
            {data.map((listing: any) => (
              <Listing key={listing.id} listingProps={listing} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
