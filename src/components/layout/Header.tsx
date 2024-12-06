import { Bell, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold text-gray-900">Finances App</h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-72">
          <Input
            type="search"
            placeholder="Search..."
            className="h-9"
            prefix={<Search className="h-4 w-4 text-gray-500" />}
          />
        </div>
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Hi Frank</span>
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}