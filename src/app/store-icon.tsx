export default function StoreIcon({ storeName }: { storeName: string }) {
  return (
    <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 bg-white p-1">
      <p className="text-center text-[10px] font-medium">{storeName}</p>
    </div>
  );
}
