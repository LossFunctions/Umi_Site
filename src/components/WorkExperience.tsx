import React from 'react';
import Section from './Section';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  company: string;
  roles: {
    title: string;
    period: string;
  }[];
  location: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: 'Clear Channel Outdoors',
    roles: [{ title: 'Manager of Account Management', period: 'Jan 2025 - Present' }],
    location: 'New York City',
    highlights: [
      'Managing a team of 4 account managers stewarding $15M/quarter revenue',
      'Built automation tools leveraging AI that reclaimed 4+ hours weekly per AM',
      'Led strategic CPM-pricing initiative generating annual revenue uplift',
      'End-to-end management of $1MM+ accounts: Geico, Walmart, AstraZeneca',
    ],
  },
  {
    company: 'StackAdapt',
    roles: [
      { title: 'Account Executive', period: 'Apr 2022 - Dec 2024' },
      { title: 'Sr. Programmatic Account Manager', period: 'Earlier role' },
    ],
    location: 'New York City',
    highlights: [
      'Outperformed QoQ on ~$750k+ quarterly quota (101%, 118%, 107%, 132%)',
      'Grew Uniqlo from test campaign to $1MM+/year Key Account',
      'Managed $1.5M revenue per quarter across two books of business',
      'Team Lead: mentored and upleveled entire AM team',
    ],
  },
  {
    company: 'Aki Technologies',
    roles: [{ title: 'Sr. Account Manager, Client Services', period: 'Jul 2016 - Dec 2021' }],
    location: 'New York City',
    highlights: [
      'Managed $3M+ revenue per quarter (10-20 campaigns at a time)',
      'Generated $2M+ in incremental/renewal dollars',
      'Onboarded high-profile accounts: Samsung, Coca-Cola, JetBlue, PayPal',
      'Worked with agencies: UM, Starcom, Horizon, Saatchi & Saatchi',
    ],
  },
  {
    company: 'AdMixt',
    roles: [{ title: 'Campaign Management Specialist', period: 'Feb 2014 - Feb 2015' }],
    location: 'New York City',
    highlights: [
      'Full campaign setup for Facebook ecommerce campaigns',
      'Audience targeting, A/B testing, optimizing towards ROAS',
      'Direct report to founder',
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <Section variant="dark" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-light text-center mb-4">
          Work Experience
        </h2>
        <p className="text-text-muted-dark text-center mb-12 max-w-2xl mx-auto">
          10+ years driving revenue growth in AdTech, from hands-on campaign management to leading high-performing teams.
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card card-dark hover:border-accent-cyan/30 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <p className="text-accent-cyan font-bold text-xl flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5" />
                    {exp.company}
                  </p>
                  {exp.roles.map((role, i) => (
                    <div key={i} className="mb-1">
                      <h3 className="text-lg font-semibold text-text-light">
                        {role.title}
                      </h3>
                      <span className="text-sm text-text-muted-dark flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {role.period}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-text-muted-dark flex items-center gap-1 shrink-0">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-text-light/90 text-sm flex items-start gap-3"
                  >
                    <span className="text-accent-cyan mt-1 shrink-0">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-12 text-center">
          <p className="text-text-muted-dark text-sm">
            <span className="font-medium text-text-light">Education:</span>{' '}
            City College of Technology, New York — Marketing & Advertising
          </p>
        </div>
      </div>
    </Section>
  );
};

export default WorkExperience;
