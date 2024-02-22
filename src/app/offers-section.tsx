"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";

const offers = [
  {
    title: "Save on Phone, Internet and TV",
    alt: "Telus",
    storeName: "Telus",
    endDate: `March 10th`,
    image: "/images/telus.jpeg",
  },
  {
    title: "Up To 20% Off On All Drinks",
    alt: "Money Tea",
    storeName: "Money Tea",
    endDate: `July 3rd`,
    image: "/images/money-tea.jpeg",
  },
];

export default function OffersSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-7xl bg-[#f6fef6] px-4 py-9 md:relative md:bg-transparent md:py-16 md:before:absolute md:before:inset-0 md:before:-z-10 md:before:w-1/2 md:before:bg-[#f6fef6]">
      <p className="mb-1 text-xs font-medium tracking-widest">OFFERS</p>
      <div className="flex justify-between">
        <h2 className="mb-10 text-3xl font-semibold tracking-wide md:text-4xl">
          Find the best offers and deals.
        </h2>
        <Link
          href="/stores"
          className="hidden text-right font-semibold text-primary md:block md:min-w-52"
        >
          View all Offers
        </Link>
      </div>

      <div className="hidden md:grid md:grid-cols-2 md:gap-10">
        {offers.map((item, index) => (
          <div key={index}>
            <Image
              className="mb-auto"
              src={item.image}
              alt={item.alt}
              width={615}
              height={400}
            />
            <div className="mb-2 mt-5 flex items-center space-x-2 font-semibold tracking-widest md:text-xs">
              <p className="border-r-[1px] border-[#374151] pr-2">
                {item.storeName}
              </p>
              <p>Crystal Mall &#x2022; Ends {item.endDate}</p>
            </div>
            <div className="line-clamp-2 text-2xl font-semibold tracking-wide">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <Carousel setApi={setApi} className="mx-auto w-full max-w-sm md:hidden">
        <CarouselContent>
          {offers.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="border-none">
                <CardContent className="flex items-center justify-center px-2">
                  <div>
                    <Image
                      className="mb-auto"
                      src={item.image}
                      alt={item.alt}
                      width={400}
                      height={400}
                    />

                    <div className="mb-2 mt-5 flex items-center space-x-2 text-[11px] font-semibold tracking-widest">
                      <p className="border-r-[1px] border-[#374151] pr-2">
                        {item.storeName}
                      </p>
                      <p>Crystal Mall &#x2022; Ends {item.endDate}</p>
                    </div>
                    <CardTitle className="mt-auto line-clamp-1 text-xl font-semibold tracking-wide">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground md:hidden">
        Slide {current} of {count}
      </div>

      <Button className="mt-10 w-full rounded-full py-6 text-base font-medium tracking-wider md:hidden">
        View all Offers
      </Button>
    </div>
  );
}
