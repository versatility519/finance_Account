import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter } from 'lucide-react';
import { ShippingStatus } from '@/types/shipping';

interface StatusFilterProps {
  value: ShippingStatus | 'all';
  onChange: (value: ShippingStatus | 'all') => void;
}

export function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <Select 
      value={value}
      onValueChange={onChange}
    >
      <SelectTrigger className="w-[180px]">
        <Filter className="h-4 w-4 mr-2" />
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Status</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
        <SelectItem value="shipped">Shipped</SelectItem>
        <SelectItem value="delivered">Delivered</SelectItem>
        <SelectItem value="cancelled">Cancelled</SelectItem>
      </SelectContent>
    </Select>
  );
}