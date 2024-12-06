import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
}

export function NavItem({ icon: Icon, label, isActive }: NavItemProps) {
  return (
    <button
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-lg w-full transition-colors',
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-gray-600 hover:bg-gray-100'
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}