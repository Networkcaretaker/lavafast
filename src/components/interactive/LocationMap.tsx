import InteractiveMap from './InteractiveMap';

interface Location {
  id: string;
  name: string;
  x: number; // X coordinate as percentage (0-100)
  y: number; // Y coordinate as percentage (0-100)
}

// Example usage component
const DeliveryServiceMap: React.FC = () => {
  // Sample locations - you'll need to adjust these coordinates based on your actual map
  const deliveryLocations: Location[] = [
    { id: 'palma', name: 'Palma', x: 82, y: 48 },
    { id: 'portals-nous', name: 'Portals Nous', x: 68, y: 65 },
    { id: 'santa-ponsa', name: 'Santa Ponsa', x: 42, y: 70 },
    { id: 'port-adriano', name: 'Port Adriano', x: 44, y: 84 },
    { id: 'andratx', name: 'Andratx', x: 22, y: 56 },
    { id: 'calvia', name: 'Calvia', x: 52, y: 52 },
  ];

  return (
    <div className="container mx-auto pb-2">
      <div className="max-w-6xl mx-auto">
        <InteractiveMap
          locations={deliveryLocations}
          mapImageUrl="/mallorca.jpg"
          mapAlt="Mallorca Delivery Locations Map"
        />
      </div>
    </div>
  );
};

export default DeliveryServiceMap;