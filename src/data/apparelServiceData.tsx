// src/data/apparelServiceData.tsx
import React from 'react';
import { Scissors, Shield, Star, Crown, Gem, Heart, Award, Users, Clock, Eye } from 'lucide-react';

export const apparelHeroData = {
  title: "Couture-Level Care for Your Finest Garments",
  subtitle: "Master tailors and fabric specialists preserving luxury wardrobes across Mallorca since 1999",
  stats: [
    {
      icon: <Scissors className="w-5 h-5" />,
      label: "Garments Annually",
      value: "10,000+"
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: "Stain Removal Success",
      value: "99.8%"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      label: "Zero Damage Guarantee",
      value: "100%"
    }
  ],
  ctaText: "Schedule Consultation",
  ctaSecondary: "Emergency Care"
};

export const apparelHighlights = [
  {
    icon: "🎩",
    title: "Haute Couture Specialists",
    description: "Expert handling of designer pieces and luxury fashion brands",
    accent: "Master craftsmen"
  },
  {
    icon: "🧵",
    title: "Traditional Tailoring",
    description: "Hand-finishing techniques passed down through generations",
    accent: "Artisan methods"
  },
  {
    icon: "🔬",
    title: "Fabric Science Expertise",
    description: "Advanced knowledge of textiles, fibers, and specialized treatments",
    accent: "Technical mastery"
  },
  {
    icon: "💎",
    title: "Luxury Brand Experience",
    description: "Trusted with Hermès, Chanel, Armani, and exclusive designer pieces",
    accent: "Elite reputation"
  },
  {
    icon: "🛡️",
    title: "Full Insurance Coverage",
    description: "Complete protection for high-value garment care and restoration",
    accent: "Peace of mind"
  },
  {
    icon: "🌿",
    title: "Eco-Luxury Cleaning",
    description: "Premium, environmentally conscious processes and products",
    accent: "Sustainable luxury"
  }
];

export const apparelProcessSteps = [
  {
    number: 1,
    title: "Expert Assessment",
    icon: "🔍",
    description: "Master tailor inspection with detailed care plan creation and transparent pricing"
  },
  {
    number: 2,
    title: "Documentation",
    icon: "📸",
    description: "Complete photo documentation and fabric testing for optimal treatment protocols"
  },
  {
    number: 3,
    title: "Master Cleaning",
    icon: "🧴",
    description: "Hand inspection, premium products, and specialized European cleaning technology"
  },
  {
    number: 4,
    title: "Expert Finishing",
    icon: "🔥",
    description: "Master pressing, detail work, and multi-point quality control inspection"
  },
  {
    number: 5,
    title: "White-Glove Delivery",
    icon: "🤵",
    description: "Professional transport with luxury packaging and care instruction guidance"
  }
];

export const apparelServiceCategories = [
  {
    title: "Men's Luxury & Formal Wear",
    description: "Bespoke suits, formal wear, and luxury menswear care",
    services: [
      "Bespoke Suit Care & Preservation",
      "Italian Wool & Cashmere Specialists",
      "French Cuff Shirts & Formal Wear",
      "Tuxedos & Black-Tie Event Preparation"
    ],
    features: [
      "Traditional pressing and shaping",
      "Seasonal climate-controlled storage",
      "In-house master tailor alterations",
      "Professional starching methods"
    ]
  },
  {
    title: "Women's Designer & Couture",
    description: "Evening gowns, designer wear, and luxury fashion care",
    services: [
      "Gown Preservation & Storage",
      "Beadwork & Sequin Hand-Cleaning",
      "Silk & Satin Specialized Care",
      "Wedding Dress Heirloom Preservation"
    ],
    features: [
      "Museum-quality storage methods",
      "Brand-specific care knowledge",
      "Delicate embellishment expertise",
      "Historical piece restoration"
    ]
  },
  {
    title: "Luxury Accessories & Leather",
    description: "Fine leather goods, accessories, and specialty textiles",
    services: [
      "Handbag Restoration & Conditioning",
      "Premium Shoe Care Services",
      "Cashmere & Silk Scarf Care",
      "Vintage Leather Revival"
    ],
    features: [
      "Color restoration and matching",
      "Antique piece conservation",
      "Hardware replacement services",
      "Traditional hand-washing techniques"
    ]
  },
  {
    title: "Specialized Restoration",
    description: "Advanced treatments and emergency garment services",
    services: [
      "Advanced Stain Removal",
      "Fiber Repair & Restoration",
      "Color & Sheen Recovery",
      "Emergency Same-Day Care"
    ],
    features: [
      "Industrial-grade stain solutions",
      "Professional mending techniques",
      "Shape and structure recovery",
      "2-hour express emergency service"
    ]
  }
];

export const apparelTrustBadges = [
  {
    icon: <Crown className="w-8 h-8" />,
    title: "Master Tailor Certified",
    description: "Traditional guild training with three generations of expertise",
    highlight: true
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Luxury Brand Approved",
    description: "Recommended by designer houses and luxury boutiques"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Full Insurance Coverage",
    description: "High-value garment protection with comprehensive coverage"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "99.8% Success Rate",
    description: "Proven track record in stain removal and garment restoration"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Family Tradition",
    description: "Three generations of craftsmanship and wardrobe expertise"
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Museum-Standard Care",
    description: "Conservation-quality preservation for heirloom garments"
  }
];

export const apparelTestimonials = [
  {
    quote: "Lavafast saved my vintage Chanel jacket from what seemed like permanent damage. The stain removal was miraculous, and the care was truly museum-quality.",
    author: "Isabella Martinez",
    title: "Fashion Collector",
    company: "Palma"
  },
  {
    quote: "Twenty years of trust with my husband's bespoke Savile Row suits. They understand luxury menswear craftsmanship like no one else in the Mediterranean.",
    author: "Carmen Lopez",
    title: "Private Client",
    company: "Santa Ponsa"
  },
  {
    quote: "My wedding dress from 1985 looks exactly like new after their preservation service. Now my daughter can wear it for her wedding - a true family treasure.",
    author: "Maria Rodriguez",
    title: "Loyal Client",
    company: "Valldemossa"
  },
  {
    quote: "As a stylist working with high-profile clients, I trust only Lavafast with designer pieces. Their expertise with delicate fabrics is unmatched.",
    author: "Alessandro Rossi",
    title: "Celebrity Stylist",
    company: "Mallorca Fashion Week"
  }
];