
export enum Language {
  EN = 'English',
  BN = 'বাংলা'
}

export enum UserRole {
  TOURIST = 'TOURIST',
  LOCAL = 'LOCAL',
  BUSINESS = 'BUSINESS',
  ADMIN = 'ADMIN'
}

export interface Spot {
  id: string;
  name: string;
  description: string;
  image: string;
  bestTime: string;
  entryFee: string;
  location: string;
  category: 'beach' | 'nature' | 'cultural';
}

export interface EmergencyContact {
  id: string;
  name: string;
  type: 'hospital' | 'police' | 'fire' | 'ambulance';
  phone: string;
  location: string;
  mapLink: string;
}

export interface Hotel {
  id: string;
  name: string;
  priceRange: string;
  minPrice: number;
  rating: number;
  distanceFromBeach: number; // in meters
  image: string;
  amenities: string[];
  contact: string;
  type: 'luxury' | 'medium' | 'budget';
}

export interface Restaurant {
  id: string;
  name: string;
  category: string;
  rating: number;
  image: string;
  price: 'Budget' | 'Mid-Range' | 'Premium';
  location: string;
  openTime: string;
}

export interface Guide {
  id: string;
  name: string;
  rating: number;
  price: number;
  image: string;
  languages: string[];
  isVerified: boolean;
}

export interface NewsAlert {
  id: string;
  title: string;
  content: string;
  type: 'weather' | 'sea' | 'emergency' | 'general';
  timestamp: string;
}

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

export interface Donor {
  id: string;
  name: string;
  group: string;
  lastDonated: string;
  phone: string;
  location: string;
  isVerified: boolean;
}
