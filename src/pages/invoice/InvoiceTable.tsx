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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useInvoiceData } from '@/hooks/useInvoiceData';
import { InvoiceStatus, InvoiceFilters, SortOption } from '@/types/invoice';
import { formatDate } from '@/lib/date';
import { Pagination } from './Pagination';

interface InvoiceTableProps {
  filters: InvoiceFilters;
  sortOption: SortOption;
  searchQuery: string;
}

export function InvoiceTable({ filters, sortOption, searchQuery }: InvoiceTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const { data, totalPages, totalItems, itemsPerPage } = useInvoiceData(
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

  const getStatusBadge = (status: InvoiceStatus) => {
    const styles = {
      need_approval: 'bg-yellow-100 text-yellow-800',
      approve: 'bg-green-100 text-green-800',
      waiting_payment: 'bg-blue-100 text-blue-800',
      paid: 'bg-red-100 text-red-800',
      complete: 'bg-green-100 text-yellow-800',
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
              <TableHead>Invoice No.</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Required Data</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ship To</TableHead>
              <TableHead>Bill To</TableHead>
              <TableHead>Total Tax Amount</TableHead>
              <TableHead>Total Net Amount</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Turn of PDF</TableHead>
              <TableHead>Approval</TableHead>
              <TableHead>Sales Num</TableHead>
              <TableHead className="w-12">Action</TableHead>
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
                    onCheckedChange={(checked) => handleSelectItem(item.id, checked as boolean)}
                  />
                </TableCell>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{formatDate(item.dateCreated)}</TableCell>
                <TableCell>{item.client}</TableCell>
                <TableCell>{formatDate(item.requiredData)}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>{item.shipTo}</TableCell>
                <TableCell>{item.billTo}</TableCell>
                <TableCell>${item.totalTaxAmount.toFixed(2)}</TableCell>
                <TableCell>${item.totalNetAmount.toFixed(2)}</TableCell>
                <TableCell>${item.totalAmount.toFixed(2)}</TableCell>
                <TableCell>{item.contact}</TableCell>
                <TableCell>{item.turnTOpdf}</TableCell>
                <TableCell>{item.clientApproval}</TableCell>
                <TableCell>{item.salesNum}</TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="p-2 hover:bg-gray-100 rounded-full">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className='w-24' sideOffset={2}>
                      <ul className="space-y-2">
                        <li>View</li>
                        <li>Edit</li>
                        <li>Delete</li>
                      </ul>
                    </PopoverContent>
                  </Popover>
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