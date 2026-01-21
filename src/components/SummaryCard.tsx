import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Clock, Wrench } from 'lucide-react';
import { Project } from '../data/projects';

interface SummaryCardProps {
  project: Project;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ project }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = async (text: string, section: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSection(section);
      setTimeout(() => setCopiedSection(null), 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formatProjectData = () => {
    return `${project.title}

${project.summary}

Problem: ${project.details.problem}
Solution: ${project.details.solution}
Time Saved: ${project.details.time_saved_hours_per_month} hours/month
Tools: ${project.details.tools_used.join(', ')}${project.details.repo ? `\nRepo: ${project.details.repo}` : ''}`;
  };

  return (
    <div className="relative mt-8">
      {/* Hard shadow */}
      <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
      
      {/* Main card */}
      <div className="relative z-20 bg-[#fff4da] rounded-xl border-[3px] border-gray-900 p-6">
        {/* Header with title and copy button */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            {project.title}
          </h2>
          <div className="relative group">
            <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
            <button
              onClick={() => copyToClipboard(formatProjectData(), 'full')}
              className="px-4 py-2 bg-[#ffc480] border-[3px] border-gray-900 text-gray-900 rounded group-hover:-translate-y-px group-hover:-translate-x-px transition-transform relative z-10 flex items-center gap-2 font-medium"
            >
              {copiedSection === 'full' ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Summary section */}
        <div className="relative mb-6">
          <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
          <div className="relative z-10 bg-[#fff7e6] border border-gray-900 rounded p-4">
            <p className="font-mono text-sm text-gray-800 leading-relaxed">
              {project.summary}
            </p>
          </div>
        </div>

        {/* Details grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem & Solution */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FE4A60] rounded-full"></span>
                Problem
              </h3>
              <div className="relative">
                <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
                <p className="relative z-10 font-mono text-sm bg-white border border-gray-900 rounded p-3 text-gray-700">
                  {project.details.problem}
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5CF1A4] rounded-full"></span>
                Solution
              </h3>
              <div className="relative">
                <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
                <p className="relative z-10 font-mono text-sm bg-white border border-gray-900 rounded p-3 text-gray-700">
                  {project.details.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Tools */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ffc480]" />
                Time Saved
              </h3>
              <div className="relative">
                <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
                <div className="relative z-10 bg-white border border-gray-900 rounded p-3">
                  <span className="font-mono text-lg font-bold text-[#FE4A60]">
                    {project.details.time_saved_hours_per_month}
                  </span>
                  <span className="font-mono text-sm text-gray-600 ml-1">
                    hours/month
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#ffc480]" />
                Tools Used
              </h3>
              <div className="relative">
                <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
                <div className="relative z-10 bg-white border border-gray-900 rounded p-3">
                  <div className="flex flex-wrap gap-2">
                    {project.details.tools_used.map((tool, index) => (
                      <span
                        key={index}
                        className="font-mono text-xs bg-[#fff7e6] border border-gray-300 rounded px-2 py-1 text-gray-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repository link */}
        {project.details.repo && (
          <div className="mt-6 pt-4 border-t border-gray-300">
            <div className="relative inline-block group">
              <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
              <a
                href={project.details.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#ffc480] border-[3px] border-gray-900 text-gray-900 rounded group-hover:-translate-y-px group-hover:-translate-x-px transition-transform relative z-10 font-medium gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Repository
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;