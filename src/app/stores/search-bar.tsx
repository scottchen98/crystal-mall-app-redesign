import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <Label htmlFor="query" className="relative">
      <Search className="absolute left-2 top-3" />
      <Input
        className="border-x-0 border-b-2 border-t-0 border-b-primary bg-[#f6fef6] py-6 pl-10"
        id="query"
        type="search"
        placeholder="Search..."
      />
    </Label>
  );
}
