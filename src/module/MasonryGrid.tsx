import React from "react";


export function MasonryGrid<T>({
  items,
  renderItem,
}: {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {items.map((item, index) => (
        <div key={index} className="break-inside-avoid mb-6">
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}