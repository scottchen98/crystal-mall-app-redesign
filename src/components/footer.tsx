import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="min-h-fit bg-primary">
      <div className="container mx-auto max-w-7xl py-8">
        <div className="flex flex-col text-primary-foreground md:flex-row md:justify-between">
          <div className="mb-12 space-y-5">
            <h2 className="text-2xl font-semibold">Meet your favorite mall.</h2>
            <div className="items flex items-center justify-start gap-2">
              <Facebook size={24} />
              <Instagram size={24} />
            </div>
          </div>
          <TheCrystalMall />
          <TheCrystalMallHours />
        </div>
        <div>
          <p className="text-xs text-primary-foreground">
            © {currentYear} The Crystal Mall. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

const menuItems = [
  {
    title: "Stores",
  },
  {
    title: "Events",
  },
  {
    title: "Visit",
  },
  {
    title: "Offers",
  },
  {
    title: "About Us",
  },
  {
    title: "Leasing Information",
  },
];
function TheCrystalMall() {
  return (
    <div className="mb-12">
      <h3 className="mb-4 text-lg font-semibold">The Crystal Mall</h3>
      <div className="space-y-3">
        {menuItems.map((item, index) => (
          <p key={index} className="text-sm">
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
}

const daysAndHoursOfOperation = [
  {
    day: "Monday",
    hours: "09:00 AM - 09:00 PM",
  },
  {
    day: "Tuesday",
    hours: "09:00 AM - 09:00 PM",
  },
  {
    day: "Wednesday",
    hours: "09:00 AM - 09:00 PM",
  },
  {
    day: "Thursday",
    hours: "09:00 AM - 09:00 PM",
  },
  {
    day: "Friday",
    hours: "09:00 AM - 09:00 PM",
  },
  {
    day: "Saturday",
    hours: "09:00 AM - 09:00 PM",
  },
  {
    day: "Sunday",
    hours: "09:00 AM - 09:00 PM",
  },
];
function TheCrystalMallHours() {
  return (
    <div className="mb-12">
      <h3 className="mb-4 text-lg font-semibold">The Crystal Mall Hours</h3>
      <div className="grid grid-cols-[1fr_3fr] gap-x-3 gap-y-1 md:grid-cols-[1fr_2fr]">
        {daysAndHoursOfOperation.map((item) => (
          <>
            <p className="text-sm">{item.day}</p>
            <p className="text-sm">{item.hours}</p>
          </>
        ))}
      </div>
    </div>
  );
}
