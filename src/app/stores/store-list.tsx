"use client";

import SearchBar from "./search-bar";
import CategoryFilterDropdown from "./category-filter-dropdown";
import CategoryFilterDialog from "./category-filter-dialog";
import StoreItem from "./store-item";

import { stores } from "./data";

export default function StoreList() {
  return (
    <div className="max-w-7xl px-4 md:mx-auto md:mt-14 md:grid md:grid-cols-[1fr_3fr] md:gap-12">
      <div>
        <SearchBar />
        <CategoryFilterDropdown />
      </div>

      <CategoryFilterDialog />

      <div>
        <h2 className="mt-7 text-2xl font-semibold md:mt-0 md:text-3xl">
          Browse by store list
        </h2>
        <div>
          {stores.sort().map((store, index) => (
            <StoreItem key={index} storeName={store} />
          ))}
        </div>
      </div>
    </div>
  );
}
