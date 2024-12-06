import { Input } from '@/components/ui/input';
// import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Input
      type="search"
      value={value}
      placeholder="Search shipments..."
      className="h-9"
      // prefix={<Search className="h-4 w-4 text-gray-500" />}  
      onChange={(e) => onChange(e.target.value)}
    />
  );
}