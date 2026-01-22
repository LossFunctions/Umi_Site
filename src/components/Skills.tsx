import React from 'react';
import Section from './Section';
import { Monitor, Database, Wrench, Brain, BarChart3, Users } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.FC<{ className?: string }>;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'DSPs & SSPs',
    icon: Monitor,
    skills: ['The Trade Desk', 'StackAdapt', 'DV360', 'Vistar', 'PlaceExchange', 'Magnite', 'Broadsign'],
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    title: 'AdTech & Measurement',
    icon: BarChart3,
    skills: ['PMP & PG Deals', 'Brand/Sales Lift Studies', 'Foot Traffic', 'Rich Media (Celtra)', 'Millward Brown', 'IRI Sales', 'Cuebiq', 'Catalina'],
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    title: 'CRM & Project Management',
    icon: Users,
    skills: ['Salesforce', 'HubSpot', 'Basecamp', 'Jira', 'Confluence', 'Notion', 'Asana'],
    color: 'bg-green-500/10 text-green-600',
  },
  {
    title: 'AI & Automation',
    icon: Brain,
    skills: ['AI Automation Tools', 'Python', 'OpenAI API', 'LangChain', 'Prompt Engineering'],
    color: 'bg-cyan-500/10 text-cyan-600',
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    skills: ['Tableau', 'Advanced Excel', 'SQL', 'Data Analysis', 'Reporting'],
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'VS Code', 'Vercel', 'React', 'TypeScript', 'Node.js'],
    color: 'bg-pink-500/10 text-pink-600',
  },
];

const Skills: React.FC = () => {
  return (
    <Section variant="light" id="skills" className="bg-paper">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
          Skills & Proficiencies
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Deep expertise in programmatic advertising, combined with a passion for building AI-powered tools.
        </p>

        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card card-light hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-text-primary rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
