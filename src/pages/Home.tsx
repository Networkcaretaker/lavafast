// Home.tsx
import React from 'react';
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
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">⛵</h3>
          <h3 className="text-2xl font-bold text-white mb-4">Maritime Care</h3>
          <p className="text-white/80 mb-6">
            Ocean-tested marine laundry solutions for the ultimate comfortable charter experience
          </p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">👗</h3>
          <h3 className="text-2xl font-bold text-white mb-4">Fine Garments</h3>
          <p className="text-white/80 mb-6">
            Professional wardrobe maintenance with careful consideration for your garments
          </p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">🚚</h3>
          <h3 className="text-2xl font-bold text-white mb-4">FREE Collection</h3>
          <p className="text-white/80 mb-6">
            FREE Collection and Delivery to the South West of Mallorca (Including all Ports and Marinas)
          </p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;