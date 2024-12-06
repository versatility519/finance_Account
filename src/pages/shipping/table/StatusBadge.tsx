import { Badge } from '@/components/ui/badge';
import { ShippingStatus } from '@/types/shipping';

const statusStyles: Record<ShippingStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  shipped: 'bg-green-100 text-green-800',
  delivered: 'bg-blue-100 text-blue-800',
  cancelled: 'bg-red-100 text-red-800',
};

interface StatusBadgeProps {
  status: ShippingStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge className={statusStyles[status]} variant="secondary">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}