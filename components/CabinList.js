import { unstable_noStore } from "next/cache";
import CabinCard from "./CabinCard";
import { getCabins } from "@/lib/data-service";

const CabinList = async ({ filter }) => {
  unstable_noStore();
  // getting cabins from the data service
  const cabins = await getCabins();
  console.log("cabins filter", filter);

  if (!cabins) return null;

  let displayedCabins;
  if (filter === "all") displayedCabins = cabins;
  else if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  else if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  else if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  else displayedCabins = cabins; // fallback

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins
        .slice()
        .reverse()
        .map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
    </div>
  );
};

export default CabinList;
