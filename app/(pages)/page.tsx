import ListingsGrid from "../components/ListingsGrid";
import LocationProvider from "../locationProvider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex mb-5 pb-16 md:pb-0">
        <p className="fixed left-0 top-0 mb-5 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Listings
        </p>
      </div>
      <LocationProvider>
        <ListingsGrid />
      </LocationProvider>
    </main>
  );
}
