// src/components/services/ProcessTimeline.tsx
import React from 'react';
import { Check } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  title?: string;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ 
  steps, 
  title = "Our Process" 
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">{title}</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-emerald-300/30 hidden md:block"></div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Step circle */}
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold relative z-10">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;