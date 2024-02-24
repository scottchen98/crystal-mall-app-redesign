import { ListFilter } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { categories } from "./data";

export default function CategoryFilterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="my-5 flex items-center gap-2 font-medium text-primary hover:cursor-pointer md:hidden">
          <ListFilter />
          <span>Filter</span>
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-h-dvh sm:max-w-lg">
        <div>
          <h2 className="mb-7 text-2xl font-semibold">Filter</h2>
          <Accordion type="single" collapsible className="w-full border-t">
            <AccordionItem value="item-1" className="pb-10">
              <AccordionTrigger className="mb-2 font-semibold">
                Category
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  {categories.map((category, index) => (
                    <div key={index}>
                      <Checkbox
                        id="terms"
                        className="relative top-[2px] mr-2"
                      />
                      <Label
                        htmlFor="terms"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <div className="mt-5 flex gap-4">
              <Button variant="outline" className="h-11 w-full rounded-full">
                Clear
              </Button>
              <Button className="h-11 w-full rounded-full">Apply</Button>
            </div>
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
}
