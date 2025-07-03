import { unstable_noStore } from "next/cache";
import CabinCard from "./CabinCard";
import { getCabins } from "@/lib/data-service";

const CabinList = async ({ filter }) => {
  unstable_noStore();
  // getting cabins from the data service
  const cabins = await getCabins();

  if (!cabins) return null;

  let dispalyedCabins;
  if (filter === "all") dispalyedCabins = cabins;
  if (filter === "small")
    dispalyedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    dispalyedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    dispalyedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 8);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {dispalyedCabins.reverse().map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;
