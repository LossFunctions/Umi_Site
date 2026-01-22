import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section variant="light" id="about" className="pt-4 md:pt-8 scroll-mt-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
          About Me
        </h2>
        <div className="space-y-5 text-lg text-text-muted leading-relaxed">
          <p>
            I've spent my career in Programmatic advertising, currently I manage a team at Clear Channel Outdoors overseeing $15M in quarterly revenue & building custom AI tools.
          </p>
          <p>
            I've had the unique experience of having been in AdOps, Senior Account Manager roles, Account Executive, and now a Manager of Account Management. These blended experiences have been at the DSP, Media Owner and Vendor side which have given me a strong 360 view of the programmatic space.
          </p>
          <p>
            My most recent obsession has been leveraging technology to drive efficiency. This has been through building AI powered tools and automations that eliminate repetitive tasks and saving my team 4+ hours per week through custom workflow solutions.
          </p>
          <p className="font-medium text-text-primary">
            Reach out if you have a unique opportunity!
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
