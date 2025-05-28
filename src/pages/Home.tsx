// Home.tsx
import React from 'react';
import WhatsApp from '../components/contact/Whatsapp';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      {/* Hero Section with Logo */}
      <div className="text-center mb-2">
        <img 
          src="/logo.svg" 
          alt="LAVAFAST Logo" 
          className="object-contain mx-auto max-w-sm md:max-w-md"
        />
        <h1 className="text-3xl md:text-3xl font-thin text-white">
          YOUR LUXURY LAUNDRY SERVICE
        </h1>
        <h1 className="text-3xl md:text-3xl font-thin text-emerald-300 mb-10">
          IN MALLORCA
        </h1>
        <div className="space-y-2 mb-12">
          <WhatsApp
            phoneNumber="+34646396735"
            message="Hello! I'm interested in your laundry services."
          >
            Contact us on WhatsApp
          </WhatsApp>
        </div>
      </div>

      {/* Services Preview */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">🏠</h3>
          <h3 className="text-2xl font-bold text-white mb-4">Property Services</h3>
          <p className="text-white/80 mb-6">
            Luxury laundry services with pristine care for your most valued linens
          </p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-2">⛵</h3>
          <h3 className="text-2xl font-bold text-white mb-4">Yacht Services</h3>
          <p className="text-white/80 mb-6">
            Ocean-tested, professional marine laundry for the ultimate charter experience
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