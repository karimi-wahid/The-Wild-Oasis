import { unstable_noStore } from "next/cache";
import CabinCard from "./CabinCard";
import { getCabins } from "@/lib/data-service";

const CabinList = async () => {
  unstable_noStore();
  // getting cabins from the data service
  const cabins = await getCabins();

  if (!cabins) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;
