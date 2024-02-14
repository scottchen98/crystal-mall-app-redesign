import { Button } from "@/components/ui/button";
import StoreIcon from "./store-icon";
import StoreIcons from "./store-icons";

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
    <div className="mt-8  bg-[#ebfff1] px-4 py-9">
      <p className="mb-1 text-xs tracking-widest">STORES & DINING</p>
      <h2 className="mb-10 text-3xl font-semibold tracking-wide">
        Explore stores and restaurants at Crystal Mall.
      </h2>
      <StoreIcons>
        {storeNames.map((storeName) => (
          <StoreIcon key={storeName} storeName={storeName} />
        ))}
      </StoreIcons>
      <Button className="mt-10 w-full rounded-full py-6 text-base font-medium tracking-wider">
        View all stores & Dining
      </Button>
    </div>
  );
}
