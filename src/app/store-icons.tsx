import React from "react";

export default function StoreIcons({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4 gap-5 lg:grid-cols-8">
        {React.Children.toArray(children).slice(0, 8)}
      </div>
      <div className="hidden lg:grid lg:grid-cols-8 lg:gap-5">
        {React.Children.toArray(children).slice(8, 16)}
      </div>
    </div>
  );
}
