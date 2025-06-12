// src/pages/ApparelService.tsx
import React from 'react';
import { Phone, Mail, MapPin, Crown, Calendar, Euro, Gem, Shield, Clock } from 'lucide-react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceHighlights from '../components/services/ServiceHighlights';
import ProcessTimeline from '../components/services/ProcessTimeline';
import ServiceDetails from '../components/services/ServiceDetails';
import TrustIndicators from '../components/services/TrustIndicators';
import Testimonials from '../components/services/Testimonials';
import WhatsApp from '../components/contact/Whatsapp';
import {
  apparelHeroData,
  apparelHighlights,
  apparelProcessSteps,
  apparelServiceCategories,
  apparelTrustBadges,
  apparelTestimonials
} from '../data/apparelServiceData';

const ApparelService: React.FC = () => {
  return (
    <div className="container mx-auto px-2 pb-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <ServiceHero
          title={apparelHeroData.title}
          subtitle={apparelHeroData.subtitle}
          stats={apparelHeroData.stats}
          ctaText={apparelHeroData.ctaText}
          ctaSecondary={apparelHeroData.ctaSecondary}
          backgroundImage="/apparel-services-hero.jpg"
        />

        {/* Service Highlights */}
        <ServiceHighlights 
          highlights={apparelHighlights}
          title="Master Craftsmen of Fabric Care"
        />

        {/* Process Timeline */}
        <ProcessTimeline 
          steps={apparelProcessSteps}
          title="Your Luxury Wardrobe Journey"
        />

        {/* Trust Indicators */}
        <TrustIndicators 
          badges={apparelTrustBadges}
          title="Trusted by Mallorca's Elite"
        />

        {/* Service Details */}
        <ServiceDetails 
          categories={apparelServiceCategories}
          title="Comprehensive Luxury Garment Care"
        />

        {/* Emergency & Specialty Services */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-lg p-8 mb-8 border border-purple-400/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Emergency & Seasonal Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-300 mb-4">⚡ Same-Day Emergency Care</h3>
              <ul className="space-y-2 text-white/80">
                <li>• 2-hour express stain removal service</li>
                <li>• Last-minute event preparation</li>
                <li>• Travel emergency garment care</li>
                <li>• Airport and hotel emergency service</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-pink-300 mb-4">🗓️ Seasonal Wardrobe Management</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Complete seasonal transitions</li>
                <li>• Climate-controlled storage service</li>
                <li>• Travel packing preparation</li>
                <li>• Special event styling support</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8 space-x-4">
            <a 
              href="tel:+34646396735"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Emergency Care Line
            </a>
            <WhatsApp
              phoneNumber="+34646396735"
              message="Hello! I need emergency garment care service. Can you help me immediately?"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              WhatsApp Emergency
            </WhatsApp>
          </div>
        </div>

        {/* Membership Programs */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Wardrobe Care Memberships</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Silver Plan */}
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-white">Silver Maintenance</h3>
                <p className="text-gray-300 text-lg font-bold">€75/month</p>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• 10 garments monthly allowance</li>
                <li>• Standard pickup service</li>
                <li>• Basic alterations included</li>
                <li>• Seasonal consultation</li>
              </ul>
            </div>

            {/* Gold Plan */}
            <div className="bg-gradient-to-b from-yellow-500/20 to-yellow-600/10 rounded-lg p-6 border border-yellow-400/30 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
              </div>
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">💎</span>
                </div>
                <h3 className="text-xl font-bold text-white">Gold Service</h3>
                <p className="text-yellow-300 text-lg font-bold">€125/month</p>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• 20 garments monthly allowance</li>
                <li>• Emergency service included</li>
                <li>• Free pickup & delivery</li>
                <li>• Stain protection treatment</li>
                <li>• Priority scheduling</li>
              </ul>
            </div>

            {/* Platinum Plan */}
            <div className="bg-gradient-to-b from-purple-500/20 to-purple-600/10 rounded-lg p-6 border border-purple-400/30">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">👑</span>
                </div>
                <h3 className="text-xl font-bold text-white">Platinum Wardrobe</h3>
                <p className="text-purple-300 text-lg font-bold">€200/month</p>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Unlimited basic cleaning</li>
                <li>• Priority emergency service</li>
                <li>• Seasonal storage included</li>
                <li>• Personal wardrobe consultant</li>
                <li>• White-glove delivery</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <WhatsApp
              phoneNumber="+34646396735"
              message="Hello! I'm interested in a wardrobe care membership. Can you provide more details about the programs?"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium"
            >
              Choose Your Membership
            </WhatsApp>
          </div>
        </div>

        {/* Luxury Partnerships */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Preferred by Luxury Brands</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5" />
                Designer Boutique Partners
              </h3>
              <div className="space-y-3">
                {[
                  { partner: "El Corte Inglés Palma", service: "Luxury department collaboration" },
                  { partner: "Bespoke Tailor Partners", service: "Men's formal specialists" },
                  { partner: "Bridal Boutiques", service: "Wedding dress specialists" },
                  { partner: "Luxury Accessories", service: "Fine jewelry and goods" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-white font-medium">{item.partner}</span>
                    <span className="text-white/70 text-sm">{item.service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                <Gem className="w-5 h-5" />
                Hospitality Services
              </h3>
              <div className="space-y-3">
                {[
                  { service: "Luxury Hotel Concierge", desc: "Guest garment services" },
                  { service: "Marina Partnerships", desc: "Yacht guest services" },
                  { service: "Private Estate Care", desc: "Residential management" },
                  { service: "Private Jet Services", desc: "Aviation guest care" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-white font-medium">{item.service}</span>
                    <span className="text-white/70 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials 
          testimonials={apparelTestimonials}
          title="Elite Clientele Testimonials"
        />

        {/* Transparent Pricing */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Transparent Luxury Pricing</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { item: "Men's Suits", price: "From €45", desc: "Full service care" },
              { item: "Evening Dresses", price: "From €35", desc: "Depends on complexity" },
              { item: "Outerwear", price: "From €25", desc: "Seasonal care" },
              { item: "Shirts & Blouses", price: "From €12", desc: "Professional pressing" },
              { item: "Accessories", price: "From €8", desc: "Scarves, ties, small items" }
            ].map((service, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                <Euro className="w-6 h-6 text-emerald-300 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white mb-1">{service.item}</h3>
                <p className="text-emerald-300 font-bold text-lg">{service.price}</p>
                <p className="text-white/70 text-xs">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 space-x-4">
            <WhatsApp
              phoneNumber="+34646396735"
              message="Hello! I'd like to get pricing for luxury garment care. Can you provide a detailed quote?"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Get Detailed Pricing
            </WhatsApp>
          </div>
        </div>

        {/* VIP & Concierge Services */}
        <div className="bg-gradient-to-r from-gold-900/30 to-amber-900/30 backdrop-blur-sm rounded-lg p-8 mb-8 border border-yellow-400/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">VIP Concierge Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Crown className="w-6 h-6" />,
                title: "Personal Wardrobe Manager",
                price: "€500/month",
                desc: "Dedicated specialist for complete wardrobe care"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Estate Service",
                price: "Custom pricing",
                desc: "On-site residential wardrobe management"
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Travel Companion",
                price: "€150/day",
                desc: "Mobile wardrobe care during travel"
              },
              {
                icon: <Gem className="w-6 h-6" />,
                title: "Event Styling",
                price: "€200/event",
                desc: "Complete styling and garment preparation"
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-yellow-300 mb-3 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-yellow-300 font-bold mb-2">{service.price}</p>
                <p className="text-white/80 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <WhatsApp
              phoneNumber="+34646396735"
              message="Hello! I'm interested in VIP concierge wardrobe services. Can we discuss custom solutions?"
              className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-3 rounded-lg font-medium"
            >
              Explore VIP Services
            </WhatsApp>
          </div>
        </div>

        {/* Collection & Delivery Options */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Luxury Logistics</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4">🚚 Standard Collection Service</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Weekly or bi-weekly scheduled routes</li>
                <li>• Flexible timing accommodation</li>
                <li>• Residential and office pickup</li>
                <li>• Secure transport protocols</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4">🤵 Premium White-Glove Service</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Personal valet collection specialist</li>
                <li>• Luxury packaging with cedar hangers</li>
                <li>• Direct transport with no storage</li>
                <li>• Same-day express service available</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/5 rounded-lg">
            <h4 className="text-lg font-bold text-white mb-4 text-center">🏦 Secure Storage Options</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <Clock className="w-6 h-6 text-emerald-300 mx-auto mb-2" />
                <p className="text-white font-medium">Climate-Controlled Vault</p>
                <p className="text-white/70 text-sm">Professional storage facility</p>
              </div>
              <div>
                <Shield className="w-6 h-6 text-emerald-300 mx-auto mb-2" />
                <p className="text-white font-medium">24/7 Security</p>
                <p className="text-white/70 text-sm">Monitored protection</p>
              </div>
              <div>
                <Phone className="w-6 h-6 text-emerald-300 mx-auto mb-2" />
                <p className="text-white font-medium">Digital Access</p>
                <p className="text-white/70 text-sm">Mobile wardrobe management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Luxury Apparel Division</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-300" />
                <div>
                  <p className="font-medium text-white">Garment Specialists</p>
                  <a href="tel:+34646396735" className="text-emerald-300 hover:text-emerald-200">
                    +34 646 396 735
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-300" />
                <div>
                  <p className="font-medium text-white">Wardrobe Care</p>
                  <a href="mailto:wardrobe@lavafast.es" className="text-emerald-300 hover:text-emerald-200">
                    wardrobe@lavafast.es
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-300 mt-1" />
                <div>
                  <p className="font-medium text-white">Showroom Location</p>
                  <p className="text-white/80">
                    Gran Via Puig de Galatzó 14 E<br />
                    07180 Santa Ponsa, Mallorca
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Showroom Hours</h3>
              <div className="space-y-2 text-white/80">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> By appointment only</p>
                <p className="text-emerald-300 font-medium">Emergency Service: 24/7 for VIP members</p>
              </div>
              
              <div className="mt-6 space-y-3">
                <WhatsApp
                  phoneNumber="+34646396735"
                  message="Hello! I'm interested in luxury wardrobe care services. Can we schedule a consultation?"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Schedule Wardrobe Consultation
                </WhatsApp>
                
                <a 
                  href="tel:+34646396735"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Master Tailors
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApparelService;