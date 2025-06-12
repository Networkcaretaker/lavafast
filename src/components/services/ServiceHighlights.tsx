// src/components/services/ServiceHighlights.tsx
import React from 'react';

interface ServiceHighlight {
  icon: string;
  title: string;
  description: string;
  accent?: string;
}

interface ServiceHighlightsProps {
  highlights: ServiceHighlight[];
  title?: string;
}

const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({ 
  highlights, 
  title = "Service Highlights" 
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <div 
            key={index}
            className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="text-3xl mb-3">{highlight.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {highlight.description}
            </p>
            {highlight.accent && (
              <div className="text-emerald-300 text-xs mt-2 font-medium">
                {highlight.accent}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;