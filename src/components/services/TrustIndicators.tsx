// src/components/services/TrustIndicators.tsx
import React from 'react';
import { Award, Users, Star, Shield, Clock, CheckCircle } from 'lucide-react';

interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

interface TrustIndicatorsProps {
  badges: TrustBadge[];
  title?: string;
}

const TrustIndicators: React.FC<TrustIndicatorsProps> = ({ 
  badges, 
  title = "Trusted Excellence" 
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <div 
            key={index}
            className={`text-center p-6 rounded-lg transition-all ${
              badge.highlight 
                ? 'bg-emerald-500/20 border border-emerald-400/30' 
                : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className={`mx-auto mb-4 ${badge.highlight ? 'text-emerald-300' : 'text-white'}`}>
              {badge.icon}
            </div>
            <h3 className={`text-lg font-bold mb-2 ${badge.highlight ? 'text-emerald-300' : 'text-white'}`}>
              {badge.title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;