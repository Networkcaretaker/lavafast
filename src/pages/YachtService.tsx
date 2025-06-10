// YachtService.tsx
import React from 'react';
import WhatsApp from '../components/contact/Whatsapp';

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
          <p className="text-white/80 mb-6">
            🛥️ Daily Port Service - Palma to Andratx coverage
            ⚡ Express Overnight - Rush processing available
            🧵 Hand-Finished Care - Premium attention to detail
            🏆 Captain's Recommended - Since 2015
            📋 Superyacht Guide Listed - Industry recognized
            🗺️ Extended Coverage - By arrangement
          </p>
          <WhatsApp
            phoneNumber="+34646396735"
            message="Hello! I'm interested in your laundry services."
            size="sm"
            className="my-2"
          >
            Get A Quote for Your Yacht Today
          </WhatsApp>
          <h2 className="text-white/80">"How We Serve Your Yacht"</h2>
          <h4 className="text-white/80">Interactive 5-Step Timeline</h4>
          <p className="text-white/80 mb-6">
            <b>1. Collection 📦</b><br/>
            Daily pickup from your berth across SW Mallorca ports<br/>
            <b>2. Inspection 🔍</b><br/>
            Pre-treatment stain analysis with premium products<br/>
            <b>3. Premium Care 🌊</b><br/>
            Specialized yacht linen processing with fiber-safe methods<br/>
            <b>4. Hand Finishing ✋</b><br/>
            Crisp ironing, flat-packed pillowcases, no-fold-crease guarantee<br/>
            <b>5. Delivery 🚚</b><br/>
            Returned pristine and charter-ready to your specifications<br/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default YachtService;