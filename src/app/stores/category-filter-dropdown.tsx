import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { categories } from "./data";

export default function CategoryFilterDropdown() {
  return (
    <Accordion
      type="single"
      collapsible
      className="hidden w-full md:mt-5 md:block md:border-t"
    >
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="mb-2 font-semibold">
          Category
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-3">
            {categories.map((category, index) => (
              <div key={index}>
                <Checkbox id="terms" className="relative top-[2px] mr-2" />
                <Label
                  htmlFor="terms"
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-4">
            <Button variant="outline" className="h-11 w-full rounded-full">
              Clear
            </Button>
            <Button className="h-11 w-full rounded-full">Apply</Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
