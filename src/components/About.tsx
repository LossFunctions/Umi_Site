import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section variant="light" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
          About Me
        </h2>
        <div className="space-y-5 text-lg text-text-muted leading-relaxed">
          <p>
            I'm a sales leader with 10+ years of experience in AdTech, currently
            managing a team at Clear Channel Outdoors overseeing $15M+ in
            quarterly revenue. My career spans programmatic advertising, account
            management, and building high-performing teams.
          </p>
          <p>
            What sets me apart is my passion for leveraging technology to drive
            efficiency. I build AI-powered tools and automations that eliminate
            repetitive tasks — recently saving my team 4+ hours per week per
            person through custom workflow solutions.
          </p>
          <p>
            I thrive at the intersection of sales strategy and technical
            innovation, whether I'm closing enterprise deals with Fortune 500
            brands or writing Python scripts to streamline operations.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
