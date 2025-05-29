import InteractiveMap from './InteractiveMap';

interface Location {
  id: string;
  name: string;
  x: number; // X coordinate as percentage (0-100)
  y: number; // Y coordinate as percentage (0-100)
}

const PortCollectionMap: React.FC = () => {
  // Sample locations - you'll need to adjust these coordinates based on your actual map
  const deliveryLocations: Location[] = [
    { id: 'la-lonja', name: 'La Lonja Marina', x: 72, y: 18 },
    { id: 'rcn-palma', name: 'Real Club Nautico', x: 56, y: 22 },
    { id: 'moll-vell', name: 'Moll Vell Marina', x: 58, y: 44 },
    { id: 'stp', name: 'STP Shipyard', x: 46, y: 56 },
    { id: 'marina-port', name: 'Marina Port de Mallorca', x: 26, y: 42 },
    { id: 'club-de-mar', name: 'Club de Mar Palma', x: 31, y: 62 },
  ];

  return (
    <div className="container mx-auto pb-12">
      <div className="max-w-6xl mx-auto">
        <InteractiveMap
          locations={deliveryLocations}
          mapImageUrl="/palma.jpg"
          mapAlt="Palma Port Collections Map"
        />
      </div>
    </div>
  );
};

export default PortCollectionMap;
