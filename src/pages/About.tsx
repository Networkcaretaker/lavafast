// About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-2 pb-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-white/90 mb-6 leading-relaxed">
            Lavafast is an established laundry service of choice for elite luxury yachts and villas in the southwest of Mallorca, including Palma. We guarantee high quality service at competitive rates. Whilst our normal services are rendered at a superior level, we are also happy to discuss any specific requests and requirements with discerning customers. We take pride in our laundry service and provide a fast, friendly and approachable service to all our customers.
          </p>
          <p className="text-white/90 leading-relaxed">
            Operating from Santa Ponsa for over 25 years, we are recognised for providing an excellent service to all of our customers which include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-white/80">
              To provide world-class luxury experiences through premium villa and yacht services.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-white/80">
              To be the leading provider of luxury hospitality services worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;