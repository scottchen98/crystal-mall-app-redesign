export default function StoreIcon({ storeName }: { storeName: string }) {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 bg-white p-1">
      <p className="text-center font-medium">{storeName}</p>
    </div>
  );
}
