import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { useNavigate, useLocation } from "react-router-dom";
interface NavItemProps {
  icon: LucideIcon;
  label: string;
}

export function NavItem({ icon: Icon, label }: NavItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === `/${label.toLowerCase()}`;

  const handleClick = () => {
    if (label == 'Dashboard')
      navigate(`/`)
    else
      navigate(`/${label.toLowerCase()}`)
  }
  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex items-center gap-2 rounded-lg transition-colors',
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