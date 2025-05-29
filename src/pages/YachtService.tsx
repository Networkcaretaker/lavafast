// YachtService.tsx
import React from 'react';

const YachtService: React.FC = () => {
  return (
    <div className="container mx-auto px-2 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h1 className="text-2xl md:text-2xl font-bold text-white mb-8 text-center">
            Yacht Services
          </h1>
          <p className="text-white/80 mb-6">
            We know that first impressions are important particularly when the owners or their guests are on board.  At Lavafast Laundry Service we make sure that we help you every step of the way to ensuring that your linen is returned clean and crisp and that your towels are returned fluffed and folded. <br/><br/>
            We check all linen for stains before entering our machines and spot treat any stains with the best products available on the market, taking care not to damage any fibres in the process. Pillow cases are ironed and packed flat to avoid any creases and we do not iron any fold creases in any linen. All linen is hand-finished to ensure that it is delivered like new.<br/><br/>
            We are a Captain's Recommended Service (since 2015) and are listed in the Superyacht Services Guide.<br/><br/>
            We will help you as much as we possibly can. Our services include:<br/>
          </p>
          <li>Daily Collection and Delivery Service to all ports and marinas situated between Palma and Andratx</li>
          <li>Delivery and Collection to other ports by arrangement</li>
          <li>Overnight service by arrangement</li>
        </div>
      </div>
    </div>
  );
};

export default YachtService;