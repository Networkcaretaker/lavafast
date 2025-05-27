// About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          About LAVAFAST
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-white/90 mb-6 leading-relaxed">
            LAVAFAST was founded with a vision to provide unparalleled luxury services 
            in villa rentals and yacht charters. We believe in creating extraordinary 
            experiences that exceed expectations.
          </p>
          <p className="text-white/90 leading-relaxed">
            With years of experience in the luxury hospitality industry, our team 
            is dedicated to delivering exceptional service and unforgettable moments 
            for our distinguished clientele.
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