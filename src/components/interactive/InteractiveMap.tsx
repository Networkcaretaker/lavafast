import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import WhatsApp from '../contact/Whatsapp';

interface Location {
  id: string;
  name: string;
  x: number; // X coordinate as percentage (0-100)
  y: number; // Y coordinate as percentage (0-100)
}

interface InteractiveMapProps {
  locations: Location[];
  mapImageUrl: string;
  mapAlt?: string;
  className?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  locations,
  mapImageUrl,
  mapAlt = "Map",
  className = ""
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <div className={`grid md:grid-cols-2 gap-4 ${className}`}>
      {/* Location List */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <div className="space-y-2">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location.id)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                selectedLocation === location.id
                  ? 'bg-blue-500/30 border border-blue-400/50 text-white'
                  : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white'
              }`}
            >
              <MapPin 
                size={10} 
                className={selectedLocation === location.id ? 'text-blue-400' : 'text-white/60'} 
              />
              {location.name}
            </button>
          ))}
        </div>
        
        {selectedLocation && (
          <button
            onClick={() => setSelectedLocation(null)}
            className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Clear selection
          </button>
        )}
      </div>

      {/* Interactive Map */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <div className="relative w-full bg-gray-800 rounded-lg overflow-hidden">
          <img
            src={mapImageUrl}
            alt={mapAlt}
            className="w-full h-full object-cover"
          />
          
          {/* Map Pins */}
          {locations.map((location) => (
            <button
              key={`pin-${location.id}`}
              onClick={() => setSelectedLocation(location.id)}
              className={`absolute transform -translate-x-1/2 -translate-y-full transition-all duration-300 z-10 ${
                selectedLocation === location.id ? 'scale-125' : 'hover:scale-110'
              }`}
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
              }}
            >
              <div className={`relative ${selectedLocation === location.id ? 'animate-bounce' : ''}`}>
                <MapPin
                  size={16}
                  className={`drop-shadow-lg ${
                    selectedLocation === location.id
                      ? 'text-blue-400 fill-blue-400'
                      : 'text-red-500 fill-red-500 hover:text-red-400 hover:fill-red-400'
                  }`}
                />
                {selectedLocation === location.id && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {location.name}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        {locations.map((location) => (
          <div>
            {selectedLocation === location.id && (
              <div className="space-y-2 mt-4">
                <WhatsApp
                  phoneNumber="+34646396735"
                  message={`Hello! I would like to arrange a collection from ${location.name}`}
                >
                  Arrange a collection from {location.name}
                </WhatsApp>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;