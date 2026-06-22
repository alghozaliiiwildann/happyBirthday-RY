import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  fontSize: string;
  opacity: number;
  emoji: string;
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const emojis = ['🌸', '💕', '✨', '🎀', '💗', '🌹', '💖', '🎂', '🎁', '🎈'];

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${5 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 10}s`,
      fontSize: `${12 + Math.random() * 20}px`,
      opacity: 0.4 + Math.random() * 0.6,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute animate-falling"
          style={{
            left: petal.left,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            fontSize: petal.fontSize,
            opacity: petal.opacity,
          }}
        >
          {petal.emoji}
        </span>
      ))}
    </div>
  );
}
