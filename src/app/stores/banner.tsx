export default function Banner() {
  return (
    <div className="bg-[#f6fef6]">
      <div className="mx-auto max-w-7xl">
        <div className="ml-4 flex h-40 flex-col items-start justify-center gap-3 md:ml-8 md:h-60 md:gap-5">
          <h1 className="text-[27px] font-semibold tracking-wide md:text-4xl">
            Explore Stores & Dining
          </h1>
          <p className="text-sm font-light md:text-base">
            Find your favorite stores and restaurants at Crystal Mall.
          </p>
        </div>
      </div>
    </div>
  );
}
