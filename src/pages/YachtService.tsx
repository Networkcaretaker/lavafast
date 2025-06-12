// src/pages/YachtService.tsx
import React from 'react';
import { Phone, Mail, MapPin, Anchor, Clock, Euro } from 'lucide-react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceHighlights from '../components/services/ServiceHighlights';
import ProcessTimeline from '../components/services/ProcessTimeline';
import ServiceDetails from '../components/services/ServiceDetails';
import TrustIndicators from '../components/services/TrustIndicators';
import Testimonials from '../components/services/Testimonials';
import WhatsApp from '../components/contact/Whatsapp';
import {
  yachtHeroData,
  yachtHighlights,
  yachtProcessSteps,
  yachtServiceCategories,
  yachtTrustBadges,
  yachtTestimonials
} from '../data/yachtServiceData';

const YachtService: React.FC = () => {
  return (
    <div className="container mx-auto px-2 pb-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <ServiceHero
          title={yachtHeroData.title}
          subtitle={yachtHeroData.subtitle}
          stats={yachtHeroData.stats}
          ctaText={yachtHeroData.ctaText}
          ctaSecondary={yachtHeroData.ctaSecondary}
          backgroundImage="/yacht-services-hero.jpg"
        />

        {/* Service Highlights */}
        <ServiceHighlights 
          highlights={yachtHighlights}
          title="Why Yacht Crews Choose Us"
        />

        {/* Process Timeline */}
        <ProcessTimeline 
          steps={yachtProcessSteps}
          title="How We Serve Your Yacht"
        />

        {/* Trust Indicators */}
        <TrustIndicators 
          badges={yachtTrustBadges}
          title="Trusted by Mediterranean's Finest"
        />

        {/* Service Details */}
        <ServiceDetails 
          categories={yachtServiceCategories}
          title="Comprehensive Yacht Services"
        />

        {/* Testimonials */}
        <Testimonials 
          testimonials={yachtTestimonials}
          title="What Captains & Crews Say"
        />

        {/* Port Coverage Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Comprehensive Port Coverage</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Daily Service Ports */}
            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                <Anchor className="w-5 h-5" />
                Daily Service Ports
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Puerto Portals", service: "Premium marina service" },
                  { name: "Port Adriano", service: "Daily morning collections" },
                  { name: "Club de Mar", service: "Established route" },
                  { name: "Santa Ponsa", service: "Local expertise" },
                  { name: "Andratx Port", service: "Extended coverage" }
                ].map((port, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-white font-medium">{port.name}</span>
                    <span className="text-white/70 text-sm">{port.service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Palma Specialist Berths */}
            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Palma Specialist Berths
              </h3>
              <div className="space-y-3">
                {[
                  { name: "La Lonja Marina", service: "Superyacht specialists" },
                  { name: "Real Club Nautico", service: "Heritage service" },
                  { name: "Moll Vell Marina", service: "Central location" },
                  { name: "STP Shipyard", service: "Refit coordination" },
                  { name: "Marina Port de Mallorca", service: "Mega yacht berths" }
                ].map((port, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-white font-medium">{port.name}</span>
                    <span className="text-white/70 text-sm">{port.service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <WhatsApp
              phoneNumber="+34646396735"
              message="Hello! I need collection service for my yacht. Can you confirm coverage for my location?"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg"
            >
              Request Coverage Confirmation
            </WhatsApp>
          </div>
        </div>

        {/* Pricing Transparency */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Transparent Yacht Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Euro className="w-6 h-6" />, title: "Volume Discounts", desc: "Bulk processing savings for regular charters" },
              { icon: <Clock className="w-6 h-6" />, title: "Seasonal Packages", desc: "Long-term charter discounts available" },
              { icon: <Phone className="w-6 h-6" />, title: "Instant Quotes", desc: "Fast response via WhatsApp guaranteed" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-emerald-300 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <WhatsApp
              phoneNumber="+34646396735"
              message="Hello! I'd like to get a detailed quote for yacht laundry services. Can you provide pricing information?"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              Get Detailed Quote
            </WhatsApp>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-lg p-8 mb-8 border border-red-400/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Emergency & Premium Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-4">🚨 Emergency Same-Day Service</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Last-minute charter requirements</li>
                <li>• VIP guest unexpected arrivals</li>
                <li>• 24/7 emergency hotline available</li>
                <li>• Rush processing with premium rates</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-4">⏰ Pre-Charter Coordination</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Complete yacht preparation services</li>
                <li>• Coordinated timing schedules</li>
                <li>• Guest arrival synchronization</li>
                <li>• Inventory management support</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8 space-x-4">
            <a 
              href="tel:+34646396735"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              24/7 Emergency Line
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Yacht Services Direct Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-300" />
                <div>
                  <p className="font-medium text-white">Direct Line</p>
                  <a href="tel:+34646396735" className="text-emerald-300 hover:text-emerald-200">
                    +34 646 396 735
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-300" />
                <div>
                  <p className="font-medium text-white">Yacht Services Email</p>
                  <a href="mailto:yacht.services@lavafast.es" className="text-emerald-300 hover:text-emerald-200">
                    yacht.services@lavafast.es
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-300 mt-1" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-white/80">
                    Gran Via Puig de Galatzó 14 E<br />
                    07180 Santa Ponsa, Mallorca
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Service Hours</h3>
              <div className="space-y-2 text-white/80">
                <p><strong>Monday - Friday:</strong> 7:00 AM - 8:00 PM</p>
                <p><strong>Saturday:</strong> 8:00 AM - 6:00 PM</p>
                <p><strong>Sunday:</strong> Emergency service only</p>
                <p className="text-emerald-300 font-medium">24/7 Emergency Line Available</p>
              </div>
              
              <div className="mt-6">
                <WhatsApp
                  phoneNumber="+34646396735"
                  message="Hello! I'm interested in yacht laundry services. Can we schedule a consultation?"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Schedule Yacht Consultation
                </WhatsApp>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default YachtService;