// src/data/yachtServiceData.tsx
import React from 'react';
import { Award, Users, Calendar, Ship, Zap, Hand, Trophy, MapPin, Clock } from 'lucide-react';

export const yachtHeroData = {
  title: "Captain's Choice for Superyacht Excellence",
  subtitle: "Trusted by luxury yacht crews across the Mediterranean since 1999",
  stats: [
    {
      icon: <Ship className="w-5 h-5" />,
      label: "Yachts Served",
      value: "500+"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Years Experience",
      value: "25+"
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: "Captain Recommended",
      value: "Since 2015"
    }
  ],
  ctaText: "Get Instant Quote",
  ctaSecondary: "24/7 Emergency Line"
};

export const yachtHighlights = [
  {
    icon: "🛥️",
    title: "Daily Port Service",
    description: "Palma to Andratx coverage with reliable daily collections",
    accent: "Free pickup & delivery"
  },
  {
    icon: "⚡",
    title: "Express Overnight",
    description: "Rush processing available for urgent charter requirements",
    accent: "24-hour turnaround"
  },
  {
    icon: "🧵",
    title: "Hand-Finished Care",
    description: "Premium attention to detail with no-fold-crease guarantee",
    accent: "Charter-ready quality"
  },
  {
    icon: "🏆",
    title: "Captain's Recommended",
    description: "Officially recognized since 2015 by industry professionals",
    accent: "Superyacht Guide Listed"
  },
  {
    icon: "📋",
    title: "Industry Recognized",
    description: "Listed in Superyacht Services Guide with proven track record",
    accent: "98% retention rate"
  },
  {
    icon: "🗺️",
    title: "Extended Coverage",
    description: "Service available beyond standard routes by arrangement",
    accent: "Mediterranean coverage"
  }
];

export const yachtProcessSteps = [
  {
    number: 1,
    title: "Collection",
    icon: "📦",
    description: "Daily pickup from your berth across SW Mallorca ports with discrete, professional service"
  },
  {
    number: 2,
    title: "Inspection",
    icon: "🔍",
    description: "Pre-treatment stain analysis with premium products, ensuring no fiber damage"
  },
  {
    number: 3,
    title: "Premium Care",
    icon: "🌊",
    description: "Specialized yacht linen processing with fiber-safe methods and luxury standards"
  },
  {
    number: 4,
    title: "Hand Finishing",
    icon: "✋",
    description: "Crisp ironing, flat-packed pillowcases, and our signature no-fold-crease guarantee"
  },
  {
    number: 5,
    title: "Delivery",
    icon: "🚚",
    description: "Returned pristine and charter-ready to your exact specifications and timing"
  }
];

export const yachtServiceCategories = [
  {
    title: "Cabin Linens",
    description: "Luxury bedding and linens for guest accommodations",
    services: [
      "Egyptian Cotton Sheets & Pillowcases",
      "Luxury Towel Sets & Bathrobes",
      "Premium Blankets & Duvets",
      "Guest Bathroom Linens"
    ],
    features: [
      "Hand-finished to perfection",
      "Flat-pack presentation to prevent creasing",
      "Stain pre-treatment with premium products",
      "Spa-quality presentation standards"
    ]
  },
  {
    title: "Galley & Dining",
    description: "Professional service for dining and kitchen textiles",
    services: [
      "Table Linens & Napkins",
      "Chef Whites & Galley Towels",
      "Bar Towels & Glass Cloths",
      "Cocktail Napkins & Service Cloths"
    ],
    features: [
      "Restaurant-quality pressing",
      "Spotless presentation standards",
      "Same-day service available",
      "Starch levels to preference"
    ]
  },
  {
    title: "Crew Accommodation",
    description: "Efficient processing for crew quarters and uniforms",
    services: [
      "Crew Quarters Linens",
      "Uniform Cleaning & Pressing",
      "Work Wear & Safety Gear",
      "Personal Laundry Service"
    ],
    features: [
      "Efficient bulk processing",
      "Cost-effective crew rates",
      "Regular pickup schedules",
      "Professional appearance standards"
    ]
  },
  {
    title: "Specialty Services",
    description: "Additional premium services for discerning clients",
    services: [
      "Crystal & Silver Polishing",
      "Delicate Fabric Care",
      "Leather Cleaning & Conditioning",
      "Flag & Banner Cleaning"
    ],
    features: [
      "White-glove handling",
      "Specialized product treatment",
      "Charter-ready presentation",
      "Emergency same-day service"
    ]
  }
];

export const yachtTrustBadges = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Captain's Recommended",
    description: "Official recognition since 2015 by Mediterranean yacht captains",
    highlight: true
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Superyacht Guide Listed",
    description: "Featured in the official Superyacht Services Guide directory"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "98% Client Retention",
    description: "Long-term partnerships with yacht management companies"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "50+ Daily Berths",
    description: "Serving premium marinas across Southwest Mallorca"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for urgent charter requirements"
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: "500+ Satisfied Crews",
    description: "Trusted by yacht crews and management since 1999"
  }
];

export const yachtTestimonials = [
  {
    quote: "Lavafast understands the exacting standards required for our charter guests. Their attention to detail is unmatched, and their reliability is essential for our operation.",
    author: "Captain M. Rodriguez",
    title: "Captain",
    company: "65m M/Y Excellence"
  },
  {
    quote: "Reliable, discreet, and always pristine results. We've trusted them for 8 years and they never disappoint.",
    author: "Chief Stew Sarah",
    title: "Chief Stewardess",
    company: "45m M/Y Serenity"
  },
  {
    quote: "The only laundry service we recommend to visiting yachts. Professional service that understands our world.",
    author: "Port Captain Martinez",
    title: "Port Captain",
    company: "Club de Mar Palma"
  },
  {
    quote: "Their emergency same-day service has saved us multiple times when VIP guests arrived unexpectedly. True professionals.",
    author: "Captain Thompson",
    title: "Captain",
    company: "80m M/Y Windward"
  }
];