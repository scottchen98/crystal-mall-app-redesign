import { Button } from "@/components/ui/button";
import StoreIcon from "./store-icon";
import StoreIcons from "./store-icons";
import Link from "next/link";

const storeNames = [
  "AJ Hair Salon",
  "Misha",
  "Amazing Grace",
  "Bo Wah",
  "Crystal Cafe",
  "Money Tea",
  "Net Eyewear",
  "Dr. Bee",
  "Aroma Eatery",
  "Shiny Tea",
  "My Box",
  "Octmon",
  "Bell",
  "TELUS",
  "Rogers",
  "Fido",
];

export default function StoreSection() {
  return (
    <div className="mt-8 bg-secondary px-4 py-9 md:py-16">
      <p className="mb-1 text-xs font-medium tracking-widest">
        STORES & DINING
      </p>
      <div className="flex justify-between">
        <h2 className="mb-10 text-3xl font-semibold tracking-wide md:text-4xl">
          Explore stores and restaurants at Crystal Mall.
        </h2>
        <Link
          href="/stores"
          className="hidden font-semibold text-primary md:mr-8 md:block"
        >
          View all Stores & Dining
        </Link>
      </div>
      <StoreIcons>
        {storeNames.map((storeName) => (
          <StoreIcon key={storeName} storeName={storeName} />
        ))}
      </StoreIcons>
      <Button className="mt-10 w-full rounded-full py-6 text-base font-medium tracking-wider md:hidden">
        View all stores & Dining
      </Button>
    </div>
  );
}
