
import React from 'react';
import { 
  Palmtree, 
  Hotel as HotelIcon, 
  Utensils, 
  Bus, 
  HeartPulse, 
  Users, 
  ShoppingBag,
  ShieldAlert,
  Camera,
  Bike,
  Droplets,
  Search,
  PlusCircle,
  Newspaper,
  Compass,
  Gift,
  MessageSquare,
  Info,
  ShieldCheck,
  MapPin,
  Waves,
  AlertTriangle,
  Droplet
} from 'lucide-react';
import { Spot, EmergencyContact, Hotel, Restaurant, Guide, NewsAlert, TourPackage, Product, Donor } from './types';

export const CATEGORIES = [
  { id: 'tourism', name: 'Tourism', nameBn: 'দর্শনীয় স্থান', icon: <Palmtree className="w-6 h-6" />, color: 'bg-blue-500' },
  { id: 'hotels', name: 'Hotels', nameBn: 'হোটেল ও রিসোর্ট', icon: <HotelIcon className="w-6 h-6" />, color: 'bg-indigo-500' },
  { id: 'food', name: 'Food', nameBn: 'রেস্টুরেন্ট', icon: <Utensils className="w-6 h-6" />, color: 'bg-orange-500' },
  { id: 'transport', name: 'Transport', nameBn: 'যাতায়াত', icon: <Bus className="w-6 h-6" />, color: 'bg-green-500' },
  { id: 'donors', name: 'Blood Bank', nameBn: 'রক্তের ডোনর', icon: <Droplet className="w-6 h-6" />, color: 'bg-rose-500' },
  { id: 'emergency', name: 'Emergency', nameBn: 'জরুরি সহায়তা', icon: <HeartPulse className="w-6 h-6" />, color: 'bg-red-500' },
  { id: 'guides', name: 'Local Guides', nameBn: 'লোকাল গাইড', icon: <Users className="w-6 h-6" />, color: 'bg-purple-500' },
  { id: 'products', name: 'Products', nameBn: 'লোকাল পণ্য', icon: <Gift className="w-6 h-6" />, color: 'bg-emerald-500' },
];

export const MOCK_DONORS: Donor[] = [
  { id: 'd1', name: 'Tanvir Ahmed', group: 'A+', lastDonated: '2 months ago', phone: '018XXXXXXXX', location: 'Kolatoli', isVerified: true },
  { id: 'd2', name: 'Rahat Islam', group: 'O+', lastDonated: '6 months ago', phone: '017XXXXXXXX', location: 'Laboni', isVerified: true },
  { id: 'd3', name: 'Sumi Akter', group: 'B+', lastDonated: '1 year ago', phone: '019XXXXXXXX', location: 'Hospital Road', isVerified: false },
  { id: 'd4', name: 'Arif Hasan', group: 'O-', lastDonated: '3 months ago', phone: '015XXXXXXXX', location: 'Baharchara', isVerified: true },
  { id: 'd5', name: 'Jasim Uddin', group: 'AB+', lastDonated: '4 months ago', phone: '016XXXXXXXX', location: 'Maidania', isVerified: true },
];

export const MOCK_SPOTS: Spot[] = [
  { 
    id: 'm1', 
    name: 'Marish Bonia Sea Beach', 
    description: 'A serene beauty between towering mountains and the vast ocean. A peaceful retreat away from the crowds.', 
    image: 'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blog392oRdxSfZemC_15dW0EjXAP_NydXlNU.png', 
    bestTime: 'Off-season / Afternoon', 
    entryFee: 'Free', 
    location: 'Near Teknaf, Marine Drive', 
    category: 'beach' 
  },
  { 
    id: 'm2', 
    name: 'Mini Bandarban', 
    description: 'A mountain retreat where nature remains unspoiled. Steep trails lead to breathtaking views and fresh air.', 
    image: 'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogXTSmk7UM9hXw9dQESDmSDG-zrAnGZr26.png', 
    bestTime: 'Morning', 
    entryFee: 'Free', 
    location: 'Between Pechardwip & Inani', 
    category: 'nature' 
  },
  { 
    id: 'm3', 
    name: 'Darianagar Cave', 
    description: 'Also known as Kana Raja’s Cave. A secretive spot with labyrinthine passages and ancient rock formations.', 
    image: 'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blognpw8tTYCWT0bvIhRxGeA1CnuPHRSPn7P.png', 
    bestTime: 'Daylight', 
    entryFee: 'Free', 
    location: 'Kolatoli-Himchari Road', 
    category: 'nature' 
  },
  { 
    id: 'm4', 
    name: 'Baghona Pass Waterfall', 
    description: 'Clear, cascading waters winding through vibrant greenery. A tranquil setting in the hills of Teknaf.', 
    image: 'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogITsNrNNVYQpdJnXCcb1sek3gT3Zl3iCz.png', 
    bestTime: 'Rainy Season', 
    entryFee: 'Free', 
    location: 'Teknaf', 
    category: 'nature' 
  },
  { 
    id: 'm5', 
    name: 'Sonadia Island', 
    description: 'A hidden gem that preserves natural beauty and ecological diversity. Known for serene landscapes and quiet shores.', 
    image: 'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blog9AriWbHMLy2meGxYfea01Sgzb4C_Chqj.png', 
    bestTime: 'Winter', 
    entryFee: 'Boat Fare', 
    location: 'Sonadia', 
    category: 'beach' 
  },
  { 
    id: 'm6', 
    name: '100 Feet Buddha Temple', 
    description: 'Home to the third-largest reclining Buddha statue in the world. A site of profound spiritual and artistic heritage.', 
    image: 'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogqEk-cGXEtR2qp_5i-fo1vdRsxnq_eSqW.png', 
    bestTime: 'Morning', 
    entryFee: 'Donation', 
    location: 'Ramu', 
    category: 'cultural' 
  }
];

export const MOCK_HOTELS: Hotel[] = [
  { id: 'b1', name: 'BAYWATCH Cox\'s Bazar', priceRange: '৳10,000 - ৳18,000', minPrice: 10000, rating: 8.7, distanceFromBeach: 0, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', amenities: ['Private Beach', 'Fitness Centre', 'Garden'], contact: 'Check Map', type: 'luxury' },
  { id: 'b2', name: 'Long Beach Hotel', priceRange: '৳7,500 - ৳15,000', minPrice: 7500, rating: 7.8, distanceFromBeach: 400, image: 'https://images.unsplash.com/photo-1551882547-ff43c63fedfe', amenities: ['Indoor Pool', 'Fitness Centre', 'Spa'], contact: 'Check Map', type: 'luxury' },
  { id: 'b3', name: 'Ramada by Wyndham Kolatoli', priceRange: '৳8,000 - ৳18,000', minPrice: 8000, rating: 7.6, distanceFromBeach: 900, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb', amenities: ['Outdoor Pool', 'Terrace', 'Free Parking'], contact: 'Check Map', type: 'luxury' },
  { id: 'b4', name: 'Royal Pearl Suites', priceRange: '৳5,500 - ৳12,000', minPrice: 5500, rating: 7.3, distanceFromBeach: 650, image: 'https://images.unsplash.com/photo-1563911544702-05994e2d25d8', amenities: ['24h Front Desk', 'Room Service', 'Luxury Suites'], contact: 'Check Map', type: 'luxury' },
  { id: 'b5', name: 'Hotel Windy Terrace', priceRange: '৳4,500 - ৳9,000', minPrice: 4500, rating: 7.1, distanceFromBeach: 50, image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511', amenities: ['Beachfront', 'Restaurant', 'Free Parking'], contact: 'Check Map', type: 'luxury' },
  { id: 'b6', name: 'Sea Pearl Beach Resort & Spa', priceRange: '৳12,000 - ৳45,000', minPrice: 12000, rating: 7.1, distanceFromBeach: 0, image: 'https://images.unsplash.com/photo-1512918766671-ad650b9b732d', amenities: ['5-Star', 'Outdoor Pool', 'Fitness Centre'], contact: 'Check Map', type: 'luxury' },
  { id: 'b7', name: 'Hotel Kollol by J&Z Group', priceRange: '৳4,000 - ৳8,500', minPrice: 4000, rating: 7.0, distanceFromBeach: 0, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d', amenities: ['Outdoor Pool', 'Fitness Centre', 'Beachfront'], contact: 'Check Map', type: 'luxury' },
  { id: 'b8', name: 'Best Western Heritage', priceRange: '৳6,500 - ৳14,000', minPrice: 6500, rating: 6.9, distanceFromBeach: 100, image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad', amenities: ['Garden', 'Restaurant', 'Lounge'], contact: 'Check Map', type: 'luxury' },
  { id: 'b9', name: 'Seagull Hotel Ltd', priceRange: '৳7,000 - ৳18,000', minPrice: 7000, rating: 6.5, distanceFromBeach: 0, image: 'https://images.unsplash.com/photo-1563911544702-05994e2d25d8', amenities: ['5-Star', 'Private Beach', 'Outdoor Pool'], contact: 'Check Map', type: 'luxury' },
  { id: 'b10', name: 'Allegro Suites', priceRange: '৳3,500 - ৳7,000', minPrice: 3500, rating: 6.5, distanceFromBeach: 550, image: 'https://images.unsplash.com/photo-1598514983318-291439755d6e', amenities: ['Terrace', '3-Star', 'Wifi'], contact: 'Check Map', type: 'medium' },
  { id: 'b11', name: 'Nitol Bay Resort', priceRange: '৳3,000 - ৳6,500', minPrice: 3000, rating: 6.4, distanceFromBeach: 250, image: 'https://images.unsplash.com/photo-1618331817311-0536030c5e3d', amenities: ['Garden', 'Terrace', 'Restaurant'], contact: 'Check Map', type: 'medium' },
  { id: 'b12', name: 'Hotel Sea Cox', priceRange: '৳2,500 - ৳5,000', minPrice: 2500, rating: 6.2, distanceFromBeach: 300, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', amenities: ['3-Star', 'Free WiFi', '24h Front Desk'], contact: 'Check Map', type: 'medium' },
  { id: 'b13', name: 'Sagor Nibash', priceRange: '৳2,000 - ৳4,500', minPrice: 2000, rating: 6.2, distanceFromBeach: 800, image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511', amenities: ['3-Star', 'Garden', 'Beach Nearby'], contact: 'Check Map', type: 'medium' },
  { id: 'b14', name: 'Muscat Holiday Resort', priceRange: '৳2,800 - ৳5,500', minPrice: 2800, rating: 5.9, distanceFromBeach: 500, image: 'https://images.unsplash.com/photo-1551882547-ff43c63fedfe', amenities: ['3-Star', '24h Desk', 'Free WiFi'], contact: 'Check Map', type: 'medium' },
  { id: 'b15', name: 'Hotel Sea Moon', priceRange: '৳1,800 - ৳3,500', minPrice: 1800, rating: 5.4, distanceFromBeach: 100, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb', amenities: ['3-Star', 'Non-smoking', 'Close to Beach'], contact: 'Check Map', type: 'medium' },
  { id: 'b16', name: 'Hotel Asia', priceRange: '৳1,200 - ৳2,500', minPrice: 1200, rating: 4.8, distanceFromBeach: 2000, image: 'https://images.unsplash.com/photo-1563911544702-05994e2d25d8', amenities: ['1-Star', 'Mountain Views', 'Room Service'], contact: 'Check Map', type: 'budget' },
  { id: 'b17', name: 'Urmee Guest House', priceRange: '৳1,500 - ৳3,000', minPrice: 1500, rating: 4.5, distanceFromBeach: 300, image: 'https://images.unsplash.com/photo-1511112232414-0675841496a7', amenities: ['2-Star', 'Free WiFi', 'Restaurant'], contact: 'Check Map', type: 'budget' },
  { id: 'b18', name: 'Hotel Cox Rotana', priceRange: '৳2,000 - ৳4,000', minPrice: 2000, rating: 4.3, distanceFromBeach: 450, image: 'https://images.unsplash.com/photo-1563911544702-05994e2d25d8', amenities: ['Terrace', 'Free Parking', 'Restaurant'], contact: 'Check Map', type: 'budget' },
  { id: 'b19', name: 'Hotel Media', priceRange: '৳1,500 - ৳3,500', minPrice: 1500, rating: 4.3, distanceFromBeach: 0, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', amenities: ['Beachfront', '24h Desk', 'Restaurant'], contact: 'Check Map', type: 'budget' },
  { id: 'b20', name: 'Hotel Golden Hill', priceRange: '৳1,800 - ৳3,500', minPrice: 1800, rating: 5.5, distanceFromBeach: 450, image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511', amenities: ['Restaurant', 'Free Parking', 'Close to Beach'], contact: 'Check Map', type: 'budget' },
];

export const MOCK_RESTAURANTS: Restaurant[] = [
  { id: 'r1', name: 'Palongki Inani', category: 'Seafood, BBQ', rating: 4.7, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/39/53/19/palongki.jpg?w=800&h=-1&s=1', price: 'Mid-Range', location: 'Marine Drive, Inani', openTime: '11:00 AM - 11:30 PM' },
  { id: 'r2', name: 'Coral Station', category: 'Steakhouse, Seafood', rating: 4.8, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/9f/a7/28/coral-station-arial-view.jpg?w=800&h=-1&s=1', price: 'Mid-Range', location: 'Patuartek Beach, Inani', openTime: '11:00 AM - 11:00 PM' },
  { id: 'r3', name: 'Sea Mount Beach Cafe', category: 'Seafood, BBQ', rating: 4.9, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/8a/67/44/it-is-almost-impossible.jpg?w=800&h=-1&s=1', price: 'Mid-Range', location: 'Patuartek Beach, Inani', openTime: '12:00 PM - 11:00 PM' },
  { id: 'r4', name: 'Salt Bistro And Cafe', category: 'Cafe, Seafood', rating: 4.1, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/37/e2/2f/salt-seafood-platter.jpg?w=800&h=-1&s=1', price: 'Mid-Range', location: 'New Beach Road, Kolatoli', openTime: '11:00 AM - 11:00 PM' },
  { id: 'r5', name: 'Ocean Kitchen', category: 'Steakhouse, Indian', rating: 4.9, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/97/56/cd/caption.jpg?w=800&h=-1&s=1', price: 'Premium', location: 'Inani Beach, Ukhia', openTime: '07:00 AM - 11:00 PM' },
  { id: 'r6', name: 'Poushee Restaurant', category: 'Asian, Bangladeshi', rating: 4.1, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/1a/77/84/front-view.jpg?w=800&h=-1&s=1', price: 'Budget', location: 'Hotel Saymon Road, Jhawtala', openTime: '07:00 AM - 11:30 PM' },
  { id: 'r7', name: 'Tajdar', category: 'Indian, Mughlai', rating: 4.9, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/ab/9e/7d/caption.jpg?w=800&h=-1&s=1', price: 'Mid-Range', location: 'World Beach Resort, Kolatoli', openTime: '07:00 AM - 11:45 PM' },
  { id: 'r8', name: 'Falong Zee', category: 'Asian, Burmese', rating: 5.0, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c7/42/4b/rakhaine-food.jpg?w=800&h=-1&s=1', price: 'Budget', location: 'Buddhist Temple Road', openTime: '10:00 AM - 10:00 PM' },
  { id: 'r9', name: 'Mermaid Cafe', category: 'Cafe, Seafood', rating: 3.8, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/9b/a5/86/indoor-area.jpg?w=800&h=-1&s=1', price: 'Mid-Range', location: 'Sugandha Beach', openTime: '12:00 PM - 11:00 PM' },
  { id: 'r10', name: 'EFC Live Fish Restaurant', category: 'Seafood, Asian', rating: 4.2, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/e5/d2/d3/cox-s-bazaar-best-fish.jpg?w=800&h=-1&s=1', price: 'Mid-Range', location: 'Motel Road', openTime: '10:00 AM - 11:00 PM' }
];

export const MOCK_EMERGENCY: EmergencyContact[] = [
  { id: 'e1', name: "Cox's Bazar Sadar Hospital", type: 'hospital', phone: '+88034164234', location: 'Hospital Road', mapLink: '#' },
  { id: 'e2', name: "Tourist Police Cox's Bazar", type: 'police', phone: '01320160000', location: 'Laboni Point', mapLink: '#' },
  { id: 'e4', name: "Tourist Police Control", type: 'police', phone: '01320222222', location: 'Cox\'s Bazar', mapLink: '#' },
  { id: 'e3', name: "Fire Service", type: 'fire', phone: '01730002233', location: 'Cox\'s Bazar', mapLink: '#' }
];

export const MOCK_GUIDES: Guide[] = [
  { id: 'g1', name: 'Ariful Islam', rating: 4.9, price: 1500, image: 'https://i.pravatar.cc/150?u=arif', languages: ['Bengali', 'English'], isVerified: true },
  { id: 'g2', name: 'Saiful Karim', rating: 4.7, price: 1200, image: 'https://i.pravatar.cc/150?u=saif', languages: ['Bengali', 'English'], isVerified: false }
];

export const MOCK_ALERTS: NewsAlert[] = [
  { id: 'a1', title: 'High Tide Warning', content: 'সমুদ্রে জোয়ারের সম্ভাবনা আছে। গভীর পানিতে নামবেন না।', type: 'sea', timestamp: '২ ঘণ্টা আগে' },
  { id: 'a2', title: 'Sunny Day', content: 'আজকের আবহাওয়া চমৎকার। রোদে বের হলে সানস্ক্রিন ব্যবহার করুন।', type: 'weather', timestamp: '৫ ঘণ্টা আগে' }
];

export const MOCK_PACKAGES: TourPackage[] = [
  { 
    id: 'p1', 
    name: 'Day Trip - Inani & Himchari', 
    duration: '1 Day', 
    price: '৳3,500', 
    image: 'https://images.unsplash.com/photo-1544735018-0fe9852bad4f', 
    highlights: ['Marine Drive Ride', 'Himchari Hill Top', 'Inani Beach'] 
  },
  { 
    id: 'p2', 
    name: 'Saint Martin Adventure', 
    duration: '2 Days, 1 Night', 
    price: '৳8,500', 
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0', 
    highlights: ['Ship Cruise', 'Coral Beach', 'Fresh Seafood'] 
  },
  { 
    id: 'p3', 
    name: 'Cox\'s Bazar Complete', 
    duration: '3 Days, 2 Nights', 
    price: '৳12,000', 
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', 
    highlights: ['Airport Transfer', 'Luxury Hotel', 'Exclusive Boat Trip'] 
  }
];

export const MOCK_PRODUCTS: Product[] = [
  { 
    id: 'pr1', 
    name: 'Premium Dried Loitta', 
    category: 'Shutki', 
    price: '৳450 / 250g', 
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62', 
    description: 'Traditionally sun-dried Bombay Duck from the shores of Cox\'s Bazar. 100% natural and clean.' 
  },
  { 
    id: 'pr2', 
    name: 'Local Hill Honey', 
    category: 'Natural', 
    price: '৳800 / 500g', 
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38', 
    description: 'Pure wildflower honey collected from the hills of Cox\'s Bazar region.' 
  },
  { 
    id: 'pr3', 
    name: 'Seashell Wall Hanging', 
    category: 'Handicraft', 
    price: '৳250', 
    image: 'https://images.unsplash.com/photo-1544644061-24898396e00e', 
    description: 'Beautifully crafted home decor item made from local sea shells by rural artisans.' 
  }
];

export const TRANSLATIONS = {
  EN: {
    heroTitle: "CoxHelp – Cox's Bazar in One Click",
    heroSubtitle: "Travel, Emergency Help, Local Services & Information—all in one place.",
    btnTourism: "Tourist Spots",
    btnEmergency: "Emergency Help",
    btnHotels: "Find Hotels",
    sectionQuick: "Quick Access",
    sectionNotices: "Today's Alerts & Notices",
    sectionSpots: "Popular Tourist Spots",
    sectionFood: "Hotels & Restaurants",
    sectionEmergency: "Emergency & Help Center",
    sectionBusiness: "Local Business & Services",
    sectionGuides: "Book a Local Guide",
    sectionReviews: "User Reviews",
    sectionPackages: "Tour Packages",
    sectionProducts: "Local Products (Shopping)",
    sectionTips: "Essential Travel Tips",
    sectionDonors: "Blood Donor Network",
    addBusiness: "Add Your Business",
    seeAll: "See All",
    callNow: "Call Now",
    details: "Details",
    bookNow: "Book Now",
    budget: "Budget",
    mid: "Mid",
    premium: "Premium",
    featuredHotels: "Featured Hotels",
    popularSpots: "Popular Spots",
    localGuides: "Local Guides",
    booking: "Book Now",
    buyNow: "Buy Now",
    sort: "Sort By",
    priceLow: "Price: Low to High",
    priceHigh: "Price: High to Low",
    ratingHigh: "Best Rating",
    distanceNear: "Nearest to Beach"
  },
  BN: {
    heroTitle: "কক্সহেল্প – কক্সবাজার এক ক্লিকেই",
    heroSubtitle: "ভ্রমণ, জরুরি সহায়তা, লোকাল সেবা ও তথ্য—সব এক জায়গায়।",
    btnTourism: "দর্শনীয় স্থান",
    btnEmergency: "জরুরি সহায়তা",
    btnHotels: "হোটেল খুঁজুন",
    sectionQuick: "কুইক সার্ভিস",
    sectionNotices: "আজকের সতর্কতা / নোটিশ",
    sectionSpots: "জনপ্রিয় দর্শনীয় স্থান",
    sectionFood: "হোটেল ও রেস্টুরেন্ট",
    sectionEmergency: "জরুরি সহায়তা",
    sectionBusiness: "লোকাল ব্যবসা ও সেবা",
    sectionGuides: "লোকাল গাইড বুকিং",
    sectionReviews: "ব্যবহারকারীদের মতামত",
    sectionPackages: "ট্যুর প্যাকেজসমূহ",
    sectionProducts: "লোকাল পণ্য (শপিং)",
    sectionTips: "ভ্রমণ পরামর্শ",
    sectionDonors: "ব্লাড ডোনার নেটওয়ার্ক",
    addBusiness: "আপনার ব্যবসা যুক্ত করুন",
    seeAll: "সবগুলো দেখুন",
    callNow: "এখনই কল করুন",
    details: "বিস্তারিত দেখুন",
    bookNow: "বুক করুন",
    budget: "বাজেট",
    mid: "মিড",
    premium: "প্রিমিয়াম",
    featuredHotels: "সেরা হোটেলসমূহ",
    popularSpots: "জনপ্রিয় স্থান",
    localGuides: "লোকাল গাইড",
    booking: "বুকিং করুন",
    buyNow: "কিনুন",
    sort: "সাজান",
    priceLow: "ভাড়া: কম থেকে বেশি",
    priceHigh: "ভাড়া: বেশি থেকে কম",
    ratingHigh: "সেরা রেটিং",
    distanceNear: "বিচের কাছে"
  }
};
