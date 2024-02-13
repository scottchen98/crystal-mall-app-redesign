import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu as DropdownMenuShadcn,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenu() {
  return (
    <DropdownMenuShadcn>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="">
          <Menu size={28} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuItem>Stores</DropdownMenuItem>
          <DropdownMenuItem>Events</DropdownMenuItem>
          <DropdownMenuItem>About Us</DropdownMenuItem>
          <DropdownMenuItem>Visit</DropdownMenuItem>
          <DropdownMenuItem>Offers</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuShadcn>
  );
}
