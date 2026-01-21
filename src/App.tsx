import React, { useState } from 'react';
import { Navbar, ProjectCarousel, SummaryCard, Footer } from './components';
import { projects } from './data/projects';

function App() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const currentProject = projects[currentProjectIndex];

  return (
    <div className="min-h-screen bg-[#FFFDF8] flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="text-gray-900">Umi's</span>
              <br />
              <span className="text-[#FE4A60]">Automation</span>
              <span className="text-gray-900"> Projects</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing some of my automations that save time, reduce costs, 
              and eliminate repetitive tasks.
            </p>
          </div>

          {/* Project carousel */}
          <ProjectCarousel
            projects={projects}
            currentIndex={currentProjectIndex}
            onIndexChange={setCurrentProjectIndex}
          />

          {/* Summary card */}
          <SummaryCard project={currentProject} />

          {/* Quick project navigation */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
              All Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`relative group text-left ${
                    index === currentProjectIndex ? 'opacity-50' : ''
                  }`}
                  disabled={index === currentProjectIndex}
                >
                  <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
                  <div className="relative z-10 bg-white border-[3px] border-gray-900 rounded p-4 group-hover:-translate-y-px group-hover:-translate-x-px transition-transform">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-mono">
                      {project.summary}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-[#FE4A60] font-mono">
                      <span>Saves {project.details.time_saved_hours_per_month}h/month</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;