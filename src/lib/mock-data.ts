import { InvoiceData } from '@/types/invoice';
import { ShippingData } from '@/types/shipping';

export const shippingData: ShippingData[] = [
  {
    id: '62',
    name: 'John Doe',
    notes: 'Express delivery requested',
    dateCreated: '2024-01-06',
    status: 'pending',
    sales: 299.99,
    carrier: 'DHL Express',
  },
  {
    id: '65',
    name: 'Jane Smith',
    notes: 'Fragile items included',
    dateCreated: '2024-01-05',
    status: 'shipped',
    sales: 149.50,
    carrier: 'FedEx',
  },
  {
    id: '66',
    name: 'John Doe',
    notes: 'Express delivery requested',
    dateCreated: '2024-01-06',
    status: 'pending',
    sales: 299.99,
    carrier: 'DHL Express',
  },
  {
    id: '65',
    name: 'Jane Smith',
    notes: 'Fragile items included',
    dateCreated: '2024-01-05',
    status: 'shipped',
    sales: 149.50,
    carrier: 'FedEx',
  },
  {
    id: '64',
    name: 'Robert Johnson',
    notes: 'Priority shipping',
    dateCreated: '2024-01-05',
    status: 'delivered',
    sales: 567.80,
    carrier: 'UPS',
  },
  {
    id: '63',
    name: 'Emily Davis',
    notes: 'International shipping',
    dateCreated: '2024-01-04',
    status: 'pending',
    sales: 892.25,
    carrier: 'DHL Express',
  },
  {
    id: '62',
    name: 'Michael Wilson',
    notes: 'Standard delivery',
    dateCreated: '2024-01-04',
    status: 'shipped',
    sales: 234.99,
    carrier: 'USPS',
  },
  {
    id: '61',
    name: 'Sarah Brown',
    notes: 'Next day delivery',
    dateCreated: '2024-01-03',
    status: 'delivered',
    sales: 445.75,
    carrier: 'FedEx',
  },
  {
    id: '60',
    name: 'David Miller',
    notes: 'Handle with care',
    dateCreated: '2024-01-03',
    status: 'cancelled',
    sales: 129.99,
    carrier: 'UPS',
  },
  {
    id: '59',
    name: 'Lisa Anderson',
    notes: 'Signature required',
    dateCreated: '2024-01-02',
    status: 'delivered',
    sales: 678.50,
    carrier: 'DHL Express',
  },
  {
    id: '58',
    name: 'James Taylor',
    notes: 'Weekend delivery',
    dateCreated: '2024-01-02',
    status: 'shipped',
    sales: 345.00,
    carrier: 'USPS',
  },
  {
    id: '57',
    name: 'Patricia Martinez',
    notes: 'Express shipping',
    dateCreated: '2024-01-01',
    status: 'delivered',
    sales: 789.99,
    carrier: 'FedEx',
  }
];

export const invoiceData:InvoiceData[] = [
  {
    id: '12',
    dateCreated: '2024-01-06',
    client: 'John',
    requiredData: '2024-01-06',
    shipTo: 'shipTo',
    billTo: 'billTo',
    totalTaxAmount: 200,
    totalNetAmount: 12,
    totalAmount: 12,
    status: 'paid',
    contact: 'string',
    turnTOpdf: true,
    clientApproval: true,
    salesNum: 12,
  },
  {
    id: '123',
    dateCreated: '2024-01-06',
    client: 'william',
    requiredData: '2024-01-06',
    shipTo: 'shipTo',
    billTo: 'billTo',
    totalTaxAmount: 423,
    totalNetAmount: 12,
    totalAmount: 12,
    status: 'approve',
    contact: 'string',
    turnTOpdf: true,
    clientApproval: true,
    salesNum: 79,
  },
]