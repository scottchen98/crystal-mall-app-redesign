import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto mb-20 flex max-w-7xl flex-col p-4 lg:flex-row-reverse">
      <Image
        src={"/images/crystal-mall-main.jpeg"}
        alt="Crystal Mall front entrance"
        width={800}
        height={500}
        sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 70vw, 90vw"
      />

      <div className="mr-12 mt-7 space-y-5 text-center tracking-wide lg:mt-auto">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Explore, Discover, Delight: Your Crystal Mall Adventure Starts Now!
        </h2>
        <p className="text-sm font-light">
          Step into your Burnaby adventure at Crystal Mall. Explore over 200
          unique stores, from everyday essentials to cultural delights. Discover
          delicious dining options and exciting events. Find your perfect moment
          today.
        </p>
      </div>
    </div>
  );
}
