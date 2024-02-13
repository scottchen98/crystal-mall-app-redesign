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

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu size={28} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>Crystal Mall</SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="my-7 flex flex-col gap-6">
          <div>Stores</div>
          <div>Events</div>
          <div>Visit</div>
          <div>Offers</div>
          <div>About Us</div>
        </div>
        <Separator />
        <SheetFooter className="mt-7">
          <div className="mr-auto flex gap-3">
            <Facebook size={24} />
            <Instagram size={24} />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
