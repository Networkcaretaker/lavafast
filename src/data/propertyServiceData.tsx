// src/data/propertyServiceData.tsx
import React from 'react';
import { Building, Clock, TrendingUp, Award, Users, Star, Shield, MapPin, Calculator } from 'lucide-react';

export const propertyHeroData = {
  title: "Premium Villa & Property Management Laundry Solutions",
  subtitle: "Trusted by Mallorca's finest property managers for rapid turnaround and exceptional quality",
  stats: [
    {
      icon: <Building className="w-5 h-5" />,
      label: "Properties Served",
      value: "200+"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Hour Turnaround",
      value: "24"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      label: "On-Time Delivery",
      value: "99%"
    }
  ],
  ctaText: "Get Commercial Quote",
  ctaSecondary: "Schedule Assessment"
};

export const propertyHighlights = [
  {
    icon: "💰",
    title: "Reduce Turnaround Time",
    description: "Cut changeover periods by 50% with our rapid processing systems",
    accent: "Faster bookings"
  },
  {
    icon: "🎯",
    title: "Commercial Pricing",
    description: "Volume discounts and dedicated account management for properties",
    accent: "Up to 25% savings"
  },
  {
    icon: "📅",
    title: "Flexible Scheduling",
    description: "Coordinated with your booking calendar and housekeeping teams",
    accent: "Calendar integration"
  },
  {
    icon: "✅",
    title: "Quality Guaranteed",
    description: "Consistent, hotel-standard results with every delivery",
    accent: "5-star standards"
  },
  {
    icon: "🚚",
    title: "Free Collection",
    description: "SW Mallorca coverage with scheduled route optimization",
    accent: "No hidden costs"
  },
  {
    icon: "📊",
    title: "Account Management",
    description: "Dedicated support, tracking, and reporting systems",
    accent: "Full transparency"
  }
];

export const propertyProcessSteps = [
  {
    number: 1,
    title: "Property Assessment",
    icon: "📋",
    description: "Site visit to evaluate linen requirements and calculate optimal service package"
  },
  {
    number: 2,
    title: "Schedule Coordination",
    icon: "📅",
    description: "Sync with your booking platform and housekeeping team schedules"
  },
  {
    number: 3,
    title: "Professional Collection",
    icon: "🚚",
    description: "Reliable pickup with inventory tracking and quality control checks"
  },
  {
    number: 4,
    title: "Hotel-Standard Processing",
    icon: "🏨",
    description: "Commercial-grade cleaning with hospitality industry standards"
  },
  {
    number: 5,
    title: "Timely Delivery",
    icon: "✅",
    description: "Guest-ready linens delivered on schedule for seamless changeovers"
  }
];

export const propertyServiceCategories = [
  {
    title: "Luxury Vacation Rentals",
    description: "Premium villa collections and high-end vacation properties",
    services: [
      "Premium Bed Linens & Egyptian Cotton Sheets",
      "Luxury Towel Sets & Bathrobes",
      "Pool Towels & Outdoor Cushions",
      "Table Linens & Dining Accessories"
    ],
    features: [
      "Guest-ready presentation standards",
      "Coordinated changeover timing",
      "Quality consistency guarantees",
      "Same-day emergency service"
    ]
  },
  {
    title: "Property Management Companies",
    description: "Portfolio services with multi-property coordination",
    services: [
      "Multi-Property Coordination",
      "Bulk Processing Discounts",
      "Account Management Systems",
      "Emergency Backup Services"
    ],
    features: [
      "Volume pricing tiers available",
      "Dedicated account managers",
      "Performance analytics and reporting",
      "24/7 emergency support"
    ]
  },
  {
    title: "Boutique Hotels & B&Bs",
    description: "Hospitality partnerships with daily service options",
    services: [
      "Daily Linen Services",
      "Restaurant Table Linens",
      "Spa & Wellness Textiles",
      "Staff Uniform Cleaning"
    ],
    features: [
      "Hospitality industry standards",
      "Regular pickup schedules",
      "Professional presentation",
      "Flexible service packages"
    ]
  },
  {
    title: "Short-Term Rentals",
    description: "Airbnb & VRBO specialists with rapid turnaround",
    services: [
      "Rapid Turnaround Schedules",
      "Quality Consistency Guarantees",
      "Seasonal Volume Handling",
      "Owner Communication Protocols"
    ],
    features: [
      "Booking platform integration",
      "Guest review optimization",
      "Seasonal rate adjustments",
      "Owner reporting systems"
    ]
  }
];

export const propertyTrustBadges = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "25+ Years in Mallorca",
    description: "Established reputation serving premium properties since 1999",
    highlight: true
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "200+ Properties Served",
    description: "Trusted by luxury villas, hotels, and rental management companies"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "99% On-Time Delivery",
    description: "Reliable scheduling that supports your booking operations"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Hotel-Standard Quality",
    description: "Consistent 5-star presentation that enhances guest reviews"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Dedicated Account Teams",
    description: "Personal service relationships with property management focus"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Fully Insured Service",
    description: "Complete protection for your property's valuable linens and textiles"
  }
];

export const propertyTestimonials = [
  {
    quote: "Lavafast transformed our operations. We can now accept last-minute bookings with confidence knowing the linens will be perfect every time.",
    author: "Maria Gonzalez",
    title: "Operations Manager",
    company: "Mallorca Luxury Villas"
  },
  {
    quote: "Professional service that understands hospitality standards. Essential for maintaining our 5-star guest rating and operational efficiency.",
    author: "Carlos Martinez",
    title: "Hotel Manager",
    company: "Porto Petro Boutique Hotel"
  },
  {
    quote: "Twenty-five years of reliable partnership. Their commercial rates and account management make our multi-property portfolio profitable and efficient.",
    author: "Sarah Thompson",
    title: "Portfolio Director",
    company: "Mediterranean Property Management"
  },
  {
    quote: "The 24-hour turnaround service is game-changing for our Airbnb operations. Guest reviews consistently mention the quality of linens.",
    author: "Roberto Silva",
    title: "Owner",
    company: "Palma Vacation Rentals"
  }
];