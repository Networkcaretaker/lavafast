// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import WhatsApp from '../components/contact/Whatsapp';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-2">
      {/* Hero Section with Logo */}
      <div className="text-center mb-2">
        <img 
          src="/logo.svg" 
          alt="LAVAFAST Logo" 
          className="object-contain mx-auto max-w-72 md:max-w-sm sm:max-w-sm"
        />
        <h1 className="text-3xl md:text-4xl font-thin text-white">
          YOUR LUXURY LAUNDRY SERVICE
        </h1>
        <h1 className="text-3xl md:text-4xl font-thin text-emerald-300 mb-10">
          IN MALLORCA
        </h1>
        <div className="space-y-2 mb-16">
          <WhatsApp
            phoneNumber="+34646396735"
            message="Hello! I'm interested in your laundry services."
          >
            Contact us on WhatsApp
          </WhatsApp>
        </div>
      </div>

      {/* Services Preview */}
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">🏠</h3>
          <h3 className="text-2xl font-bold text-white mb-4">Luxury Homes</h3>
          <p className="text-white/80 mb-6">
            Bespoke luxury laundry services with pristine care for your most valued white linens
          </p>
          <div className="my-4">
            <Link to="/property-service" className="bg-emerald-300/20 hover:bg-emerald-500/30 text-white my-4 px-6 py-3 rounded-lg transition-colors">
              Learn More
            </Link>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">⛵</h3>
          <h3 className="text-2xl font-bold text-white mb-4">Maritime Care</h3>
          <p className="text-white/80 mb-6">
            Ocean-tested marine laundry solutions for the ultimate comfortable charter experience
          </p>
          <div className="my-4">
            <Link to="/yacht-service" className="bg-emerald-300/20 hover:bg-emerald-500/30 text-white my-4 px-6 py-3 rounded-lg transition-colors">
              Learn More
            </Link>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">👗</h3>
          <h3 className="text-2xl font-bold text-white mb-4">Fine Garments</h3>
          <p className="text-white/80 mb-6">
            Professional wardrobe maintenance with careful consideration for your garments
          </p>
          <div className="my-4">
            <Link to="/apparel-service" className="bg-emerald-300/20 hover:bg-emerald-500/30 text-white my-4 px-6 py-3 rounded-lg transition-colors">
              Learn More
            </Link>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">🚚</h3>
          <h3 className="text-2xl font-bold text-white mb-4">FREE Collection</h3>
          <p className="text-white/80 mb-6">
            FREE Collection and Delivery to the South West of Mallorca (Including all Ports and Marinas)
          </p>
          <div className="my-4">
            <Link to="/delivery-service" className="bg-emerald-300/20 hover:bg-emerald-500/30 text-white my-4 px-6 py-3 rounded-lg transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/*About us section*/}
      <div className="mx-auto mb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-white/90 mb-6 leading-relaxed">
            Lavafast is an established laundry service of choice for elite luxury yachts and villas in the southwest of Mallorca, including Palma. We guarantee high quality service at competitive rates. Whilst our normal services are rendered at a superior level, we are also happy to discuss any specific requests and requirements with discerning customers. We take pride in our laundry service and provide a fast, friendly and approachable service to all our customers.
          </p>
          <p className="text-white/90 leading-relaxed">
            Operating from Santa Ponsa for over 25 years, we are recognised for providing an excellent service to all of our customers which include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-white/80">
              To provide world-class luxury experiences through premium villa and yacht services.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-white/80">
              To be the leading provider of luxury hospitality services worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;