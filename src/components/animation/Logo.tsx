import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';

// Define interfaces for bubble properties
interface Bubble {
  id: number;
  radius: number;
  angle: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
  radiusOffset: number;
}

interface Position {
  x: number;
  y: number;
}

export default function BubbleDonut(): ReactElement {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  
  useEffect(() => {
    // Create initial bubbles
    const initialBubbles: Bubble[] = [];
    const totalBubbles: number = 100;
    
    for (let i = 0; i < totalBubbles; i++) {
      initialBubbles.push(generateBubble(i));
    }
    
    setBubbles(initialBubbles);
    
    // Animation loop
    const interval = setInterval(() => {
      setBubbles(prev => prev.map(bubble => {
        // Update angle position
        let newAngle: number = bubble.angle + bubble.speed;
        if (newAngle >= 360) newAngle -= 360;
        
        // Oscillate radius slightly for floating effect
        const radiusOffset: number = Math.sin(Date.now() / 1000 + bubble.id) * 10;
        
        return {
          ...bubble,
          angle: newAngle,
          radiusOffset
        };
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  const generateBubble = (id: number): Bubble => {
    // Donut parameters
    const outerRadius: number = 50;
    const innerRadius: number = 44;
    
    // Random radius within donut thickness
    const radius: number = innerRadius + Math.random() * (outerRadius - innerRadius);
    
    // Random angle in degrees
    const angle: number = Math.random() * 360;
    
    // Random blue/turquoise shade
    const blueShade: number = Math.floor(180 + Math.random() * 75);
    const turquoiseShade: number = Math.floor(180 + Math.random() * 75);
    
    return {
      id,
      radius,
      angle,
      size: 1 + Math.random() * 4,
      speed: 0.2 + Math.random() * 0.6,
      color: `rgb(0, ${blueShade}, ${turquoiseShade})`,
      opacity: 0.4 + Math.random() * 0.6,
      radiusOffset: 0
    };
  };
  
  const calculatePosition = (bubble: Bubble): Position => {
    const angleInRadians: number = bubble.angle * Math.PI / 180;
    const effectiveRadius: number = bubble.radius + bubble.radiusOffset;
    const x: number = effectiveRadius * Math.cos(angleInRadians);
    const y: number = effectiveRadius * Math.sin(angleInRadians);
    return { x, y };
  };
  
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <svg className="w-full h-full max-w-lg max-h-lg" viewBox="-200 -200 400 400">
        {/* Optional: Donut outline for reference */}
        <circle 
          cx="0" 
          cy="0" 
          r="150" 
          fill="none" 
          stroke="rgba(0, 100, 200, 0.1)" 
          strokeWidth="0"
        />
        <circle 
          cx="0" 
          cy="0" 
          r="100" 
          fill="none" 
          stroke="rgba(0, 100, 200, 0.1)" 
          strokeWidth="0"
        />
        
        {/* Bubbles */}
        {bubbles.map(bubble => {
          const { x, y } = calculatePosition(bubble);
          return (
            <circle
              key={bubble.id}
              cx={x}
              cy={y}
              r={bubble.size}
              fill={bubble.color}
              opacity={bubble.opacity}
              className="transition-all duration-200"
            >
              <animate
                attributeName="r"
                values={`${bubble.size};${bubble.size * 1.2};${bubble.size}`}
                dur={`${2 + Math.random() * 3}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
}