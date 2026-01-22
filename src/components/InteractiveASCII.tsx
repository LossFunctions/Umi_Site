import React, { useState, useEffect, useRef } from 'react';

const keywords = [
  // AdTech & Programmatic
  'DSP', 'SSP', 'AdTech', 'Programmatic', 'ROAS', 'CPM', 'CPC',
  'TTD', 'DV360', 'StackAdapt', 'Magnite', 'PlaceExchange',
  // DOOH & Channels
  'DOOH', 'CTV', 'OLV', 'Display', 'Audio', 'Omni Channel',
  'Vistar', 'Hivestack', 'Broadsign',
  // Measurement & Verification
  'IAS', 'Double Verify', 'DCM', 'Cuebiq', 'Foursquare',
  'IRI', 'Millward Brown', 'BLS', 'Uplift', 'Brand Awareness',
  // Sales & Strategy
  'Revenue', 'Sales', 'Growth', 'Strategy', 'Pipeline', 'ROI',
  'Incremental', 'Upsell', 'Renewal', 'Retargeting',
  // Tools & Tech
  'Salesforce', 'HubSpot', 'Tableau', 'Looker',
  'Python', 'Data', 'AI', 'ML', 'Automation',
  // Business
  'B2B', 'SaaS', 'CRM',
];

interface FloatingWord {
  id: number;
  word: string;
  x: number;
  y: number;
  opacity: number;
  fontSize: number;
}

const InteractiveASCII: React.FC = () => {
  const [words, setWords] = useState<FloatingWord[]>([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const idRef = useRef(0);

  // Spawn a new word
  const spawnWord = (x: number, y: number) => {
    const word = keywords[Math.floor(Math.random() * keywords.length)];
    const newWord: FloatingWord = {
      id: idRef.current++,
      word,
      x: x + (Math.random() - 0.5) * 120,
      y: y + (Math.random() - 0.5) * 80,
      opacity: 0.6,
      fontSize: 14 + Math.floor(Math.random() * 6),
    };
    setWords(prev => [...prev.slice(-12), newWord]);
  };

  // Animate words - fade and float
  useEffect(() => {
    const interval = setInterval(() => {
      setWords(prev =>
        prev
          .map(w => ({
            ...w,
            opacity: w.opacity - 0.008,
            y: w.y - 0.5,
          }))
          .filter(w => w.opacity > 0)
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - lastPosRef.current.x;
    const dy = y - lastPosRef.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 80) {
      spawnWord(x, y);
      lastPosRef.current = { x, y };
    }
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dot grid background - more visible */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(16, 16, 248, 0.12) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Secondary smaller dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(16, 16, 248, 0.06) 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
          backgroundPosition: '8px 8px',
        }}
      />

      {/* Floating words */}
      {words.map(({ id, word, x, y, opacity, fontSize }) => (
        <span
          key={id}
          className="absolute pointer-events-none font-mono font-semibold select-none whitespace-nowrap"
          style={{
            left: x,
            top: y,
            opacity,
            fontSize: `${fontSize}px`,
            color: `rgba(16, 16, 248, ${0.5 + opacity * 0.5})`,
            transform: 'translate(-50%, -50%)',
            textShadow: '0 0 10px rgba(16, 16, 248, 0.2)',
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default InteractiveASCII;
