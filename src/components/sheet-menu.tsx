import { Menu } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/stores", label: "Stores" },
  { href: "/events", label: "Events" },
  { href: "/visit", label: "Visit" },
  { href: "/offers", label: "Offers" },
  { href: "/about-us", label: "About Us" },
];

export function SheetMenu() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu size={28} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle className="mt-5 text-center">Crystal Mall</SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="my-7 flex flex-col gap-3">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              <Button
                variant={pathname === link.href ? "default" : "ghost"}
                className="w-full"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
        <Separator />
        <SheetFooter className="mt-7">
          <div className="mx-auto flex gap-3">
            <Facebook size={24} />
            <Instagram size={24} />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
