import { useState } from "react";
import { ShippingHeader } from "./ShippingHeader";
import { ShippingTable } from "./ShippingTable";
import { ShippingFilters, SortOption } from "@/types/shipping";

function App() {
  const [filters, setFilters] = useState<ShippingFilters>({
    status: "all",
    carrier: "all",
  });
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
        <main className="flex-1 p-6">
          <ShippingHeader
            onFiltersChange={setFilters}
            onSortChange={setSortOption}
            onSearchChange={setSearchQuery}
          />
          <ShippingTable
            filters={filters}
            sortOption={sortOption}
            searchQuery={searchQuery}
          />
        </main>
    </div>
  );
}

export default App;
