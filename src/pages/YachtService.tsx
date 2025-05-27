// YachtService.tsx
import React from 'react';

const YachtService: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Yacht Services
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
          <p className="text-xl text-white/90 text-center leading-relaxed">
            Set sail in style with our luxury yacht charter services. Whether for a romantic 
            getaway, corporate event, or family adventure, our fleet offers the ultimate 
            maritime experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🛥️ Luxury Yachts</h3>
            <p className="text-white/80">
              Premium yacht fleet ranging from intimate cruisers to mega yachts.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">👨‍✈️ Professional Crew</h3>
            <p className="text-white/80">
              Experienced captains and crew ensuring safety and exceptional service.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🗺️ Custom Itineraries</h3>
            <p className="text-white/80">
              Personalized routes to the most beautiful destinations worldwide.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🍾 Fine Dining</h3>
            <p className="text-white/80">
              Gourmet cuisine prepared by world-class chefs onboard.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🏊‍♀️ Water Sports</h3>
            <p className="text-white/80">
              Complete water sports equipment for adventure and recreation.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🎉 Events & Parties</h3>
            <p className="text-white/80">
              Perfect venue for celebrations, corporate events, and special occasions.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Charter Your Yacht
          </button>
        </div>
      </div>
    </div>
  );
};

export default YachtService;