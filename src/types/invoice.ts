export type InvoiceStatus = 'Need Approval' | 'Approve' | 'Waiting Payment' | 'Paid' | 'Complete';

export type SortOption = 'newest' | 'oldest' | 'amount-high' | 'amount-low';

export interface InvoiceFilters {
  status: InvoiceStatus | 'all';
  carrier: string | 'all';
}

export interface InvoiceData {
  id: string;
  dateCreated: string;
  name: string;
  client: string;
  requiredData: string;
  shipTo: string;
  billTo: string;
  totalTaxAmount: number;
  totalNetAmount: number;
  totalAmount: number;
  status: InvoiceStatus;
  contact: string;
  turnTOpdf: boolean;
  clientApproval: boolean;
  salesNum: number;
}