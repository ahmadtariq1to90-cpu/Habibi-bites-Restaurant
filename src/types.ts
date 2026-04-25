export type Category = 'Fast Food' | 'BBQ' | 'Karahi' | 'Drinks' | 'Deals' | 'Mains' | 'Starters' | 'Desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isSpecial?: boolean;
  isAvailable: boolean;
  isSpicy?: boolean;
  badges?: string[];
}

export interface Order {
  id: string;
  destination: string;
  guestName: string;
  itemsCount: number;
  total: number;
  status: 'Preparing' | 'Served' | 'Ready for Pickup' | 'Payment Due';
  type: 'Dine-In' | 'Delivery';
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  isScheduled?: boolean;
  redemptions?: string;
  tag?: string;
}
