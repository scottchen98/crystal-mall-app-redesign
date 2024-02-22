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

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const nextYear = new Date().getFullYear() + 1;

const newsAndEvents = [
  {
    title: "Love is in the Air! Valentine's Day Celebrations at Crystal Mall",
    alt: "Valentine's Day",
    type: "EVENTS",
    date: `FEBRUARY 10 - 14, ${nextYear}`,
    image: "/images/valentines.jpeg",
  },
  {
    title: "New Eats at Crystal Mall: Food Court Transformation!",
    alt: "New Food Court",
    type: "NEWS",
    date: `JULY 15, ${nextYear}`,
    image: "/images/new-food-court.jpeg",
  },
];

export default function EventsSection() {
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
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-9 md:relative md:py-16 md:before:absolute md:before:inset-0 md:before:-z-10 md:before:ml-auto md:before:w-1/2 md:before:bg-[#f6fef6]">
      <p className="mb-1 text-xs font-medium tracking-widest">NEWS & EVENTS</p>
      <div className="flex justify-between">
        <h2 className="mb-10 text-3xl font-semibold tracking-wide md:text-4xl">
          Never miss an update on our news and events.
        </h2>
        <Link
          href="/stores"
          className="hidden text-right font-semibold text-primary md:block md:min-w-52"
        >
          View all News & Events
        </Link>
      </div>

      <div className="hidden md:grid md:grid-cols-2 md:gap-10">
        {newsAndEvents.map((item, index) => (
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
                {item.type}
              </p>
              <p>{item.date}</p>
            </div>
            <div className="line-clamp-2 text-2xl font-semibold tracking-wide">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <Carousel setApi={setApi} className="mx-auto w-full max-w-sm md:hidden">
        <CarouselContent>
          {newsAndEvents.map((item, index) => (
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
                        {item.type}
                      </p>
                      <p>{item.date}</p>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl font-semibold tracking-wide">
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
      <Button
        variant="outline"
        className="mt-10 w-full rounded-full border-primary py-6 text-base font-medium tracking-wider text-primary hover:border-input md:hidden"
      >
        View all News & Events
      </Button>
    </div>
  );
}
