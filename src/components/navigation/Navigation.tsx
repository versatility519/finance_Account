import {
  BarChart3,
  FileText,
  Package,
  ShoppingCart,
  Users,
  Receipt,
  BookOpen,
  LayoutGrid,
  ClipboardCheck,
  FileBarChart,
  Package2,
  ClipboardList,
} from 'lucide-react';
import { NavItem } from './NavItem';

export function Navigation() {
  return (
    <nav className="flex w-full space-y-1 px-2 py-4">
      <NavItem icon={BarChart3} label="Dashboard" />
      <NavItem icon={FileText} label="Invoice" />
      <NavItem icon={Package} label="Shipping" isActive />
      <NavItem icon={ShoppingCart} label="Sales" />
      <NavItem icon={Users} label="Clients" />
      <NavItem icon={Receipt} label="Bills" />
      <NavItem icon={BookOpen} label="Journal" />
      <NavItem icon={LayoutGrid} label="T - Account" />
      <NavItem icon={ClipboardCheck} label="Trial Balance" />
      <NavItem icon={FileBarChart} label="Financial Statement" />
      <NavItem icon={Package2} label="Inventory" />
      <NavItem icon={ClipboardList} label="Requisitions" />
    </nav>
  );
}