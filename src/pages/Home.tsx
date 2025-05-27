// Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section with Logo */}
      <div className="text-center mb-16">
        <img 
          src="/logo.png" 
          alt="LAVAFAST Logo" 
          className="object-contain mx-auto mb-8 max-w-md"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to LAVAFAST
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Premium villa and yacht services for the ultimate luxury experience
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
          Explore Our Services
        </button>
      </div>

      {/* Services Preview */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Villa Services</h3>
          <p className="text-white/80 mb-6">
            Luxury villa rentals and management services
          </p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Yacht Services</h3>
          <p className="text-white/80 mb-6">
            Premium yacht charters and marine services
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