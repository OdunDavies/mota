export type SubsidiarySlug = 'automotive' | 'interiors';

export type RoleType = 'super_admin' | 'group_admin' | 'subsidiary_admin' | 'staff' | 'customer';

export type InquiryStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
export type ProjectStatus = 'planning' | 'in_progress' | 'review' | 'completed';
export type VehicleStatus = 'available' | 'sold' | 'reserved' | 'in_transit';

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address?: Address;
}

export interface MediaItem {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  type?: 'image' | 'video';
}
