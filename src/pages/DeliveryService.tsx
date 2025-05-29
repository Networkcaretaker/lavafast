// DeliveryService.tsx
import React from 'react';
// import WhatsApp from '../components/contact/Whatsapp';
import DeliveryServiceMap from '../components/interactive/LocationMap';
import PortCollectionMap from '../components/interactive/PortsMap';

const DeliveryService: React.FC = () => {
  return (
    <div className="container mx-auto px-2 pb-2">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-4">
          <h2 className="text-2xl font-bold text-white mb-4">FREE Collection & Delivery Service</h2>
          <p className="text-white/90 leading-relaxed">
            Lavafast Laundry Service provides a free daily laundry delivery and collection service
            to all the locations shown below. Collections/deliveries outside this area can be arranged, but
            may incur a collection/delivery charge. Please contact us to discuss your specific
            requirements.
          </p>
        </div>

        <div className="mb-2">
          <h2 className="text-2xl font-bold text-white mb-4">Mallorca Collection Points</h2>
          <DeliveryServiceMap />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Palma Collection Points</h2>
          <PortCollectionMap />
        </div>

      </div>
    </div>
  );
};

export default DeliveryService;
