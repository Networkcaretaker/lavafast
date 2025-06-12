// src/pages/PropertyService.tsx
import React from 'react';
import { Phone, Mail, MapPin, Building, Calculator, Euro, Users, TrendingUp, Clock } from 'lucide-react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceHighlights from '../components/services/ServiceHighlights';
import ProcessTimeline from '../components/services/ProcessTimeline';
import ServiceDetails from '../components/services/ServiceDetails';
import TrustIndicators from '../components/services/TrustIndicators';
import Testimonials from '../components/services/Testimonials';
import WhatsApp from '../components/contact/Whatsapp';
import {
  propertyHeroData,
  propertyHighlights,
  propertyProcessSteps,
  propertyServiceCategories,
  propertyTrustBadges,
  propertyTestimonials
} from '../data/propertyServiceData';

const PropertyService: React.FC = () => {
  return (
    <div className="container mx-auto px-2 pb-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <ServiceHero
          title={propertyHeroData.title}
          subtitle={propertyHeroData.subtitle}
          stats={propertyHeroData.stats}
          ctaText={propertyHeroData.ctaText}
          ctaSecondary={propertyHeroData.ctaSecondary}
          backgroundImage="/property-services-hero.jpg"
        />

        {/* Service Highlights */}
        <ServiceHighlights 
          highlights={propertyHighlights}
          title="Why Property Managers Choose Lavafast"
        />

        {/* Process Timeline */}
        <ProcessTimeline 
          steps={propertyProcessSteps}
          title="Streamlined Property Service Process"
        />

        {/* Trust Indicators */}
        <TrustIndicators 
          badges={propertyTrustBadges}
          title="Trusted by Mallorca's Property Professionals"
        />

        {/* Service Details */}
        <ServiceDetails 
          categories={propertyServiceCategories}
          title="Complete Property Portfolio Solutions"
        />

        {/* Commercial Pricing Tiers */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Commercial Pricing Tiers</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="text-center mb-4">
                <Building className="w-8 h-8 text-emerald-300 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white">Tier 1</h3>
                <p className="text-emerald-300">1-5 Properties</p>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Standard commercial rates</li>
                <li>• Weekly collection service</li>
                <li>• Basic account management</li>
                <li>• Email support</li>
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="bg-gradient-to-b from-emerald-500/20 to-emerald-600/10 rounded-lg p-6 border border-emerald-400/30 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
              </div>
              <div className="text-center mb-4">
                <Users className="w-8 h-8 text-emerald-300 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white">Tier 2</h3>
                <p className="text-emerald-300">6-15 Properties</p>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• <strong>15% volume discount</strong></li>
                <li>• Twice-weekly collections</li>
                <li>• Dedicated account manager</li>
                <li>• Priority scheduling</li>
                <li>• Phone support</li>
              </ul>
            </div>

            {/* Tier 3 */}
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="text-center mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-300 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white">Tier 3</h3>
                <p className="text-emerald-300">16+ Properties</p>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• <strong>25% volume discount</strong></li>
                <li>• Daily collection routes</li>
                <li>• Premium account services</li>
                <li>• Emergency support included</li>
                <li>• 24/7 support hotline</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <WhatsApp
              phoneNumber="+34646396735"
              message="Hello! I manage multiple properties and would like to discuss commercial pricing tiers. Can you provide a custom quote?"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium"
            >
              Get Volume Pricing Quote
            </WhatsApp>
          </div>
        </div>

        {/* Turnaround Time Solutions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Maximize Your Booking Potential</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: "4-Hour Express",
                description: "Emergency changeovers for last-minute bookings",
                accent: "Premium rate"
              },
              {
                icon: <Calculator className="w-6 h-6" />,
                title: "24-Hour Standard",
                description: "Regular changeover schedule with reliable timing",
                accent: "Best value"
              },
              {
                icon: <Euro className="w-6 h-6" />,
                title: "Weekly Bulk",
                description: "End-of-week collections with maximum savings",
                accent: "Lowest rates"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Seasonal Support",
                description: "Peak season volume handling and coordination",
                accent: "Scalable"
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-lg">
                <div className="text-emerald-300 mb-3 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm mb-2">{service.description}</p>
                <span className="text-emerald-300 text-xs font-semibold">{service.accent}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Property Management Integration */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Seamlessly Integrated Operations</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4">📱 Technology Integration</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Calendar sync with booking platforms</li>
                <li>• Automated scheduling and notifications</li>
                <li>• Real-time tracking and updates</li>
                <li>• Mobile app for account management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4">👥 Team Coordination</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Housekeeping team collaboration</li>
                <li>• Inventory tracking and management</li>
                <li>• Quality control and consistency</li>
                <li>• Guest experience enhancement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials 
          testimonials={propertyTestimonials}
          title="Property Management Success Stories"
        />

        {/* Service Coverage Areas */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Complete SW Mallorca Coverage</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Primary Service Zone
              </h3>
              <div className="space-y-3">
                {[
                  { area: "Santa Ponsa", service: "Local headquarters - priority service" },
                  { area: "Puerto Portals", service: "Marina-adjacent properties" },
                  { area: "Calvia Municipality", service: "Comprehensive coverage" },
                  { area: "Paguera", service: "Beachfront specialists" },
                  { area: "Port Adriano", service: "Luxury development focus" }
                ].map((location, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-white font-medium">{location.area}</span>
                    <span className="text-white/70 text-sm">{location.service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Extended Coverage
              </h3>
              <div className="space-y-3">
                {[
                  { area: "Palma", service: "City center and suburbs" },
                  { area: "Andratx", service: "Mountain and coastal properties" },
                  { area: "Estellencs", service: "Rural luxury estates" },
                  { area: "Valldemossa", service: "Historic village properties" }
                ].map((location, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-white font-medium">{location.area}</span>
                    <span className="text-white/70 text-sm">{location.service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <WhatsApp
              phoneNumber="+34646396735"
              message="Hello! I need to confirm service coverage for my properties. Can you provide area-specific information?"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Check Coverage Area
            </WhatsApp>
          </div>
        </div>

        {/* Getting Started Process */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg p-8 mb-8 border border-emerald-400/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Process</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-300">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Property Assessment</h3>
              <p className="text-white/80 text-sm">Site visit and volume analysis for custom pricing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-300">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Service Setup</h3>
              <p className="text-white/80 text-sm">Schedule coordination and team introduction</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-300">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">30-Day Trial</h3>
              <p className="text-white/80 text-sm">Risk-free evaluation and partnership confirmation</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <WhatsApp
              phoneNumber="+34646396735"
              message="Hello! I'm interested in starting a property management partnership. Can we schedule an assessment?"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              Start Partnership Process
            </WhatsApp>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Property Management Division</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-300" />
                <div>
                  <p className="font-medium text-white">Business Development</p>
                  <a href="tel:+34646396735" className="text-emerald-300 hover:text-emerald-200">
                    +34 646 396 735
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-300" />
                <div>
                  <p className="font-medium text-white">Commercial Services</p>
                  <a href="mailto:commercial@lavafast.es" className="text-emerald-300 hover:text-emerald-200">
                    commercial@lavafast.es
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
              <h3 className="text-lg font-bold text-white">Business Hours</h3>
              <div className="space-y-2 text-white/80">
                <p><strong>Monday - Friday:</strong> 7:00 AM - 7:00 PM</p>
                <p><strong>Saturday:</strong> 8:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> Emergency collections only</p>
                <p className="text-emerald-300 font-medium">24/7 Emergency Support Available</p>
              </div>
              
              <div className="mt-6 space-y-3">
                <WhatsApp
                  phoneNumber="+34646396735"
                  message="Hello! I'm a property manager interested in your commercial services. Can we schedule a consultation?"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Schedule Property Consultation
                </WhatsApp>
                
                <a 
                  href="mailto:commercial@lavafast.es"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Business Development
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyService;