import React from 'react';
import RoleTicker from './RoleTicker';
import AnimatedCounter from './AnimatedCounter';
import InteractiveASCII from './InteractiveASCII';
import ASCIIName from './ASCIIName';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="section-light min-h-screen flex flex-col justify-center py-20 md:py-32 relative overflow-hidden">
      {/* Interactive ASCII Background */}
      <InteractiveASCII />

      <div className="container-custom text-center relative z-10">
        {/* Micro label */}
        <div className="mb-6 flex justify-center">
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted">
            Sales Leader & AI Builder
          </span>
        </div>

        {/* ASCII Art Name */}
        <div className="flex justify-center mb-8">
          <ASCIIName />
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
          Turning <span className="text-text-primary font-semibold">strategy into revenue</span>,{' '}
          building <span className="text-text-primary font-semibold">AI-powered tools</span>,{' '}
          and leading high-performing teams.
        </p>

        {/* Animated Stats strip */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12 flex-wrap">
          <AnimatedCounter
            end={10}
            suffix="+"
            label="Years in AdTech"
            duration={1500}
          />
          <AnimatedCounter
            end={15}
            prefix="$"
            suffix="M+"
            label="Quarterly Revenue"
            duration={1800}
          />
          <AnimatedCounter
            end={120}
            suffix="%"
            label="Avg Quota Attainment"
            duration={2000}
          />
        </div>

        {/* Rotating ticker */}
        <RoleTicker />

        {/* CTA Buttons */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="btn-pill btn-pill-primary flex items-center gap-2 group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#experience"
            className="btn-pill btn-pill-outline flex items-center gap-2"
          >
            View Experience
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
