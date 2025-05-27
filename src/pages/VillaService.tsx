// VillaService.tsx
import React from 'react';

const VillaService: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Villa Services
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
          <p className="text-xl text-white/90 text-center leading-relaxed">
            Experience luxury living with our premium villa rental and management services. 
            From oceanfront retreats to mountain escapes, we offer the finest accommodations 
            for discerning travelers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🏖️ Beachfront Villas</h3>
            <p className="text-white/80">
              Stunning oceanfront properties with private beaches and breathtaking views.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🏔️ Mountain Retreats</h3>
            <p className="text-white/80">
              Secluded mountain villas offering peace, tranquility, and spectacular scenery.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🏙️ Urban Luxury</h3>
            <p className="text-white/80">
              Premium city villas with modern amenities and convenient locations.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">👨‍💼 Concierge Service</h3>
            <p className="text-white/80">
              24/7 concierge service to handle all your needs and preferences.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🍽️ Private Chef</h3>
            <p className="text-white/80">
              World-class chefs available for private dining experiences.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🚁 Transportation</h3>
            <p className="text-white/80">
              Private helicopter and luxury car services for seamless travel.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Book Your Villa Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillaService;