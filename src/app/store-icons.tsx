export default function StoreIcons({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex flex-wrap items-center justify-center gap-8">
      {children}
    </div>
  );
}
