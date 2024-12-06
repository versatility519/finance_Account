import { useState, useEffect, useMemo } from 'react';
import { ShippingData, ShippingFilters, SortOption } from '@/types/shipping';
import { mockData } from '@/lib/mock-data';

export function useShippingData(
  page: number,
  filters: ShippingFilters,
  sortOption: SortOption,
  searchQuery: string
) {
  const [data, setData] = useState<ShippingData[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 5;

  const filteredAndSortedData = useMemo(() => {
    let result = [...mockData];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.notes.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query)
      );
    }

    // Apply filters
    if (filters.status && filters.status !== 'all') {
      result = result.filter(item => item.status === filters.status);
    }
    if (filters.carrier && filters.carrier !== 'all') {
      result = result.filter(item => item.carrier === filters.carrier);
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
        result.sort((a, b) => b.sales - a.sales);
        break;
      case 'amount-low':
        result.sort((a, b) => a.sales - b.sales);
        break;
    }

    return result;
  }, [mockData, filters, sortOption, searchQuery]);

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