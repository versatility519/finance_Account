import { useState, useEffect, useMemo } from 'react';
import { InvoiceData, InvoiceFilters, SortOption } from '@/types/invoice';
import { invoiceData } from '@/lib/mock-data';

export function useInvoiceData(
  page: number,
  filters: InvoiceFilters,
  sortOption: SortOption,
  searchQuery: string
) {
  const [data, setData] = useState<InvoiceData[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 5;

  const filteredAndSortedData = useMemo(() => {
    let result = [...invoiceData];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.client.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query)
      );
    }

    // Apply filters
    if (filters.status && filters.status !== 'all') {
      result = result.filter(item => item.status === filters.status);
    }
  
    // Apply sorting
    switch (sortOption) {
      case 'newest':
        result.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime());
        break;
      case 'amount-high':
        result.sort((a, b) => b.totalAmount - a.totalAmount);
        break;
      case 'amount-low':
        result.sort((a, b) => a.totalAmount - b.totalAmount);
        break;
    }

    return result;
  }, [invoiceData, filters, sortOption, searchQuery]);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setData(filteredAndSortedData.slice(startIndex, endIndex));
    setTotalItems(filteredAndSortedData.length);
  }, [page, filteredAndSortedData]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return { 
    data, 
    totalPages, 
    totalItems,
    itemsPerPage
  };
}