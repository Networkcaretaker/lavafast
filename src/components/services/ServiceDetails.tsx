// src/components/services/ServiceDetails.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

interface ServiceCategory {
  title: string;
  description: string;
  services: string[];
  features?: string[];
}

interface ServiceDetailsProps {
  categories: ServiceCategory[];
  title?: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ 
  categories, 
  title = "Comprehensive Services" 
}) => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => {
          const isExpanded = expandedCards.includes(index);
          
          return (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              {/* Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-white/15 transition-colors"
                onClick={() => toggleCard(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-emerald-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-emerald-300" />
                  )}
                </div>
                <p className="text-white/80 mt-2">{category.description}</p>
              </div>
              
              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-6 pb-6 border-t border-white/10">
                  {/* Services List */}
                  <div className="mt-4">
                    <h4 className="text-emerald-300 font-medium mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start gap-2 text-white/80">
                          <Check className="w-4 h-4 text-emerald-300 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Features List */}
                  {category.features && (
                    <div className="mt-4">
                      <h4 className="text-emerald-300 font-medium mb-3">Quality Standards:</h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-white/80">
                            <Check className="w-4 h-4 text-emerald-300 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDetails;