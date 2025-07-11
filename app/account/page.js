import { auth } from "@/lib/auth";

export const metadata = {
  title: "Guest area",
};

const Page = async () => {
  const session = await auth();
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {session?.user?.name || "Guest"}
    </h2>
  );
};

export default Page;
