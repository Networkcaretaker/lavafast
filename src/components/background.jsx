import { useState, useEffect } from 'react';

export default function BubbleAnimation() {
  const [bubbles, setBubbles] = useState([]);
  const BUBBLE_COUNT = 30;

  // Create a new bubble with consistent parameters
  const createBubble = (id) => {
    // Enhanced color palette
    const colors = [
      'bg-blue-400', // Medium blue
      'bg-blue-500', // Blue
      'bg-cyan-400', // Turquoise
      'bg-teal-400', // Teal
      'bg-blue-800', // Dark blue
      'bg-white', // White
    ];

    const opacity = ['opacity-20', 'opacity-30', 'opacity-40', 'opacity-50'];

    return {
      id,
      x: 1 + Math.random() * 99, // Random x position (1-99%)
      y: 110 + Math.random() * 20, // Start BELOW the viewport (110-130%)
      size: 5 + Math.random() * 25, // Size between 5-30px
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: opacity[Math.floor(Math.random() * opacity.length)],
      speed: 0.2 + Math.random() * 0.3, // Speed between 0.2-0.5
      wobble: Math.random() * 2 - 1, // Wobble between -1 and 1
      wobbleSpeed: 0.01 + Math.random() * 0.02, // Wobble speed
    };
  };

  useEffect(() => {
    // Initialize bubbles
    const initialBubbles = [];
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      // For initial bubbles, distribute them from bottom to near top
      const newBubble = createBubble(i);
      // Override Y to distribute initial bubbles in visible area
      newBubble.y = Math.random() * 120; // 0-120% (some still below viewport)
      initialBubbles.push(newBubble);
    }
    setBubbles(initialBubbles);

    // Animation frame handling with timestamp for smoother animation
    let animationFrameId;
    let lastTimestamp = 0;

    const animate = (timestamp) => {
      // Calculate time elapsed
      const elapsed = timestamp - lastTimestamp;

      // Only update if enough time has passed (for consistent speed)
      if (elapsed > 16) {
        // ~60fps
        lastTimestamp = timestamp;

        setBubbles((prevBubbles) =>
          prevBubbles.map((bubble) => {
            // Move bubble up with constant speed
            const newY = bubble.y - (bubble.speed * elapsed) / 50;

            // If bubble goes off top, reset to below viewport
            if (newY < -10) {
              return createBubble(bubble.id);
            }

            // Add slight horizontal wobble
            const newWobble = bubble.wobble + bubble.wobbleSpeed;
            const newX = bubble.x + Math.sin(newWobble) * 0.05;

            return {
              ...bubble,
              x: newX,
              y: newY,
              wobble: newWobble,
            };
          })
        );
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full ${bubble.color} ${bubble.opacity}`}
          style={{
            left: `${bubble.x}%`,
            bottom: `${100 - bubble.y}%`, // Using bottom instead of top
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)',
            transform: 'translate(-50%, 50%)', // Center horizontally, align bottom
          }}
        />
      ))}
    </div>
  );
}
