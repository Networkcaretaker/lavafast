// src/components/services/ServiceHero.tsx
import React from 'react';
import WhatsApp from '../contact/Whatsapp';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  stats: Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
  }>;
  ctaText: string;
  ctaSecondary?: string;
  backgroundImage?: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  stats,
  ctaText,
  ctaSecondary,
  backgroundImage = '/yacht-services-hero.jpg'
}) => {
  return (
    <div 
      className="relative min-h-96 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-lg overflow-hidden mb-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <div className="relative z-10 p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-emerald-300">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-sm text-white/80">{stat.label}</div>
                <div className="font-bold text-white">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsApp
            phoneNumber="+34646396735"
            message="Hello! I'd like to get a quote for yacht services."
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium text-lg"
          >
            {ctaText}
          </WhatsApp>
          {ctaSecondary && (
            <a 
              href="tel:+34646396735"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium text-lg border border-white/30 transition-colors"
            >
              {ctaSecondary}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;