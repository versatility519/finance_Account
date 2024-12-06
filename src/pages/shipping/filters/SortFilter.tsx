import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SortOption } from '@/types/shipping';

interface SortFilterProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortFilter({ value, onChange }: SortFilterProps) {
  return (
    <Select 
      value={value}
      onValueChange={onChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Newest First</SelectItem>
        <SelectItem value="oldest">Oldest First</SelectItem>
        <SelectItem value="amount-high">Amount: High to Low</SelectItem>
        <SelectItem value="amount-low">Amount: Low to High</SelectItem>
      </SelectContent>
    </Select>
  );
}