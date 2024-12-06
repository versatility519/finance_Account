export type ShippingStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

export type SortOption = 'newest' | 'oldest' | 'amount-high' | 'amount-low';

export interface ShippingFilters {
  status: ShippingStatus | 'all';
  carrier: string | 'all';
}

export interface ShippingData {
  id: string;
  name: string;
  notes: string;
  dateCreated: string;
  status: ShippingStatus;
  sales: number;
  carrier: string;
}