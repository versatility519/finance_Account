import { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useShippingData } from '@/hooks/useShippingData';
import { ShippingStatus, ShippingFilters, SortOption } from '@/types/shipping';
import { formatDate } from '@/lib/date';
import { Pagination } from './Pagination';

interface ShippingTableProps {
  filters: ShippingFilters;
  sortOption: SortOption;
  searchQuery: string;
}

export function ShippingTable({ filters, sortOption, searchQuery }: ShippingTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  const { data, totalPages, totalItems, itemsPerPage } = useShippingData(
    currentPage,
    filters,
    sortOption,
    searchQuery
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(data.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== id));
    }
  };

  const getStatusBadge = (status: ShippingStatus) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      shipped: 'bg-green-100 text-green-800',
      delivered: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800',
    };

    return (
      <Badge className={styles[status]} variant="secondary">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox 
                  checked={selectedItems.length === data.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Carrier</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {data.map((item) => (
              <TableRow 
                key={item.id}
                className={selectedItems.includes(item.id) ? 'bg-gray-50' : ''}
              >
                <TableCell>
                  <Checkbox 
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={(checked) => handleSelectItem(item.id, checked)}
                  />
                </TableCell>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.notes}</TableCell>
                <TableCell>{formatDate(item.dateCreated)}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>${item.sales.toFixed(2)}</TableCell>
                <TableCell>{item.carrier}</TableCell>
                <TableCell>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
    </div>
  );
}