// DeliveryService.tsx
import React from 'react';
// import WhatsApp from '../components/contact/Whatsapp';
import InteractiveMap from '../components/interactive/InteractiveMap';

const DeliveryService: React.FC = () => {
  return (
    <div className="container mx-auto px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">FREE Collection & Delivery Service</h2>
          <p className="text-white/90 leading-relaxed">
            Lavafast Laundry Service provides a free daily laundry delivery and collection service
            to all the locations shown below. Collections/deliveries outside this area can be arranged, but
            may incur a collection/delivery charge. Please contact us to discuss your specific
            requirements.
          </p>
        </div>

        <div className="mb-8">
            <InteractiveMap />
        </div>

      </div>
    </div>
  );
};

export default DeliveryService;
