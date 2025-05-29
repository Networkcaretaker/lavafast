import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

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
        <h3 className="text-xl font-bold text-white mb-4">Delivery Locations</h3>
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
                size={6} 
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
        <h3 className="text-xl font-bold text-white mb-4">Map</h3>
        <div className="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
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
                  size={12}
                  className={`drop-shadow-lg ${
                    selectedLocation === location.id
                      ? 'text-blue-400 fill-blue-400 z-50'
                      : 'text-red-500 fill-red-500/30 hover:text-red-400 hover:fill-red-400 z-10'
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
      </div>
    </div>
  );
};

// Example usage component
const DeliveryServiceMap: React.FC = () => {
  // Sample locations - you'll need to adjust these coordinates based on your actual map
  const deliveryLocations: Location[] = [
    { id: 'stp', name: 'STP Shipyard Palma', x: 61, y: 58 },
    { id: 'moll-vell', name: 'Moll Vell Marina', x: 63, y: 56 },
    { id: 'la-lonja', name: 'La Lonja Marina', x: 63, y: 55 },
    { id: 'rcn-palma', name: 'Real Club Nautico Palma', x: 62, y: 54 },
    { id: 'marina-port', name: 'Marina Port de Mallorca', x: 46, y: 58 },
    { id: 'club-de-mar', name: 'Club de Mar Palma', x: 44, y: 64 },
    { id: 'puerto-portals', name: 'Puerto Portals', x: 35, y: 70 },
    { id: 'portals-nous', name: 'Portals Nous', x: 32, y: 68 },
    { id: 'port-adriano', name: 'Port Adriano', x: 28, y: 72 },
    { id: 'santa-ponsa', name: 'Santa Ponsa', x: 25, y: 75 },
    { id: 'andratx', name: 'Andratx', x: 15, y: 80 },
  ];

  return (
    <div className="container mx-auto pb-12">
      <div className="max-w-4xl mx-auto">
        <InteractiveMap
          locations={deliveryLocations}
          mapImageUrl="/mallorca.png"
          mapAlt="Mallorca Delivery Locations Map"
        />
      </div>
    </div>
  );
};

export default DeliveryServiceMap;