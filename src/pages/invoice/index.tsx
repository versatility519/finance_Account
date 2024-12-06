import { useState } from "react";
import { InvoiceHeader } from "./InvoiceHeader";
import { InvoiceTable } from "./InvoiceTable";
import { InvoiceFilters, SortOption } from "@/types/invoice";

function Invoice() {
  const [filters, setFilters] = useState<InvoiceFilters>({
    status: "all"
  });
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
        <main className="flex-1 p-6">
          <InvoiceHeader
            onFiltersChange={setFilters}
            onSortChange={setSortOption}
            onSearchChange={setSearchQuery}
          />
          <InvoiceTable
            filters={filters}
            sortOption={sortOption}
            searchQuery={searchQuery}
          />
        </main>
    </div>
  );
}

export default Invoice;
