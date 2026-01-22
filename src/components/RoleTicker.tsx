import React, { useState, useEffect } from 'react';

interface Role {
  company: string;
  title: string;
  period: string;
  highlight: string;
}

const roles: Role[] = [
  {
    company: 'Clear Channel Outdoors',
    title: 'Manager of Account Management',
    period: '2025 - Present',
    highlight: 'Manage a team, oversee $15M/quarter, & build AI tools',
  },
  {
    company: 'StackAdapt',
    title: 'Programmatic Account Executive',
    period: '2023 - 2025',
    highlight: 'Avg 115% quota attainment',
  },
  {
    company: 'StackAdapt',
    title: 'Sr. Programmatic Account Manager',
    period: '2022 - 2023',
    highlight: '$1.5M quarterly revenue managed',
  },
  {
    company: 'Aki Technologies',
    title: 'Sr. Account Manager',
    period: '2016 - 2021',
    highlight: '$3M+ quarterly revenue managed',
  },
  {
    company: 'AI Custom Tools',
    title: 'AI Builder',
    period: 'Ongoing',
    highlight: 'Automation & Custom Workflows',
  },
];

const RoleTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentIndex];

  return (
    <div className="flex justify-center">
      <div
        className={`
          bg-white border border-gray-200 rounded-2xl shadow-soft
          w-full max-w-[340px] overflow-hidden
          ${isAnimating ? 'ticker-exit' : 'ticker-enter'}
        `}
      >
        {/* Content - centered layout */}
        <div className="p-5 text-center">
          <p className="text-accent-blue font-bold text-lg mb-1">
            {currentRole.company}
          </p>
          <p className="text-text-primary font-semibold text-sm mb-1">
            {currentRole.title}
          </p>
          <p className="text-xs text-text-muted mb-2">
            {currentRole.period}
          </p>
          <p className="text-xs text-text-muted/80 italic">
            {currentRole.highlight}
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 pb-4">
          {roles.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(i);
                  setIsAnimating(false);
                }, 200);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-accent-blue w-5'
                  : 'bg-gray-200 w-1.5 hover:bg-gray-300'
              }`}
              aria-label={`Go to ${roles[i].company}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleTicker;
