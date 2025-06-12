// src/components/services/Testimonials.tsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ 
  testimonials, 
  title = "What Our Clients Say" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!testimonials.length) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">{title}</h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Quote Icon */}
        <Quote className="w-12 h-12 text-emerald-300/50 mx-auto mb-6" />
        
        {/* Testimonial Content */}
        <div className="text-center">
          <blockquote className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed italic">
            "{currentTestimonial.quote}"
          </blockquote>
          
          <div className="text-emerald-300 font-medium">
            {currentTestimonial.author}
          </div>
          <div className="text-white/80 text-sm">
            {currentTestimonial.title}
            {currentTestimonial.company && `, ${currentTestimonial.company}`}
          </div>
        </div>
        
        {/* Navigation */}
        {testimonials.length > 1 && (
          <>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}
        
        {/* Dots Indicator */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-emerald-300' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;