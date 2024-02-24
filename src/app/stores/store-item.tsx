export default function StoreItem({ storeName }: { storeName: string }) {
  return (
    <div className="border-b p-5 first:mt-5">
      <div className="flex gap-7">
        <div className="rounded-full bg-[#f6fef6] p-11"></div>
        <div className="my-auto">
          <h3 className="text-lg font-semibold md:text-2xl">{storeName}</h3>
        </div>
      </div>
    </div>
  );
}
