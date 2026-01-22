import React from 'react';
import Section from './Section';
import { Rocket } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section variant="dark" id="projects">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
          Projects
        </h2>
        <p className="text-lg text-text-muted-dark mb-8">
          A showcase of my AI automations and side projects.
        </p>

        {/* Coming Soon Placeholder */}
        <div className="card card-dark py-16 border-dashed border-2 border-accent-cyan/30">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-accent-cyan/10 rounded-full">
              <Rocket className="w-8 h-8 text-accent-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-text-light">
              Coming Soon
            </h3>
            <p className="text-text-muted-dark max-w-md">
              I'm currently working on documenting my projects. Check back soon
              for a carousel of my AI automations and experiments!
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
