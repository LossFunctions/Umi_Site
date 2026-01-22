import React from 'react';
import Section from './Section';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Role {
  title: string;
  period: string;
  duration?: string;
  highlights?: string[];
}

interface Experience {
  company: string;
  logo?: string;
  totalTenure?: string;
  roles: Role[];
  location: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: 'Clear Channel Outdoors',
    logo: '/logos/clearchannel.svg',
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
    logo: '/logos/stackadapt.svg',
    totalTenure: '2 yrs 10 mos',
    roles: [
      {
        title: 'Programmatic Account Executive',
        period: 'Apr 2023 - Jan 2025',
        duration: '1 yr 10 mos',
        highlights: [
          'Outperformed QoQ on ~$750k+ quarterly quota (101%, 118%, 107%, 132%)',
          'Grew Uniqlo from test campaign to $1MM+/year Key Account',
          'Successfully sold omni-channel (DOOH, CTV, Video, Audio, Display, Native, In-Game)',
        ],
      },
      {
        title: 'Senior Programmatic Account Manager',
        period: 'Apr 2022 - Mar 2023',
        duration: '1 yr',
        highlights: [
          'Managed $1.5M revenue per quarter across two books of business',
          'Team Lead: mentored and upleveled entire AM team',
          'Responsible for post-sale: platform demos, retention, upsells/cross-sells, optimizations',
        ],
      },
    ],
    location: 'New York City',
    highlights: [],
  },
  {
    company: 'Aki Technologies',
    logo: '/logos/aki.svg',
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
    logo: '/logos/admixt.svg',
    roles: [{ title: 'Campaign Management Specialist', period: 'Feb 2014 - Feb 2015' }],
    location: 'New York City',
    highlights: [
      'Full campaign setup for Facebook ecommerce campaigns',
      'Audience targeting, A/B testing, optimizing towards ROAS',
      'Direct report to founder',
    ],
  },
];

// Company logos mapping
const companyLogos: Record<string, string> = {
  'Clear Channel Outdoors': '/logos/CCO1.jpeg',
  'StackAdapt': '/logos/Stackadapt.avif',
  'Aki Technologies': '/logos/aki.avif',
  'AdMixt': '/logos/Admixt.jpeg',
};

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
          {experiences.map((exp, index) => {
            const logoSrc = companyLogos[exp.company];
            const hasMultipleRoles = exp.roles.length > 1 && exp.roles[0].highlights;

            return (
              <div
                key={index}
                className="card card-dark hover:border-accent-cyan/30 transition-colors group"
              >
                {/* Company Header */}
                <div className="flex items-start gap-4 mb-4">
                  {logoSrc && (
                    <img
                      src={logoSrc}
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 shrink-0 rounded-lg object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <p className="text-accent-cyan font-bold text-xl">
                          {exp.company}
                        </p>
                        {exp.totalTenure && (
                          <p className="text-sm text-text-muted-dark">
                            Full-time · {exp.totalTenure}
                          </p>
                        )}
                      </div>
                      <span className="text-sm text-text-muted-dark flex items-center gap-1 shrink-0">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Roles - LinkedIn style for multi-role */}
                {hasMultipleRoles ? (
                  <div className="ml-6 border-l-2 border-accent-cyan/20 pl-6 space-y-6">
                    {exp.roles.map((role, i) => (
                      <div key={i} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-accent-cyan/60" />

                        <h3 className="text-lg font-semibold text-text-light">
                          {role.title}
                        </h3>
                        <p className="text-sm text-text-muted-dark flex items-center gap-2 mb-3">
                          <Calendar className="w-3 h-3" />
                          {role.period} {role.duration && `· ${role.duration}`}
                        </p>

                        {role.highlights && (
                          <ul className="space-y-2">
                            {role.highlights.map((highlight, j) => (
                              <li
                                key={j}
                                className="text-text-light/90 text-sm flex items-start gap-3"
                              >
                                <span className="text-accent-cyan mt-1 shrink-0">—</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="ml-6 border-l-2 border-accent-cyan/20 pl-6 mt-2">
                    {exp.roles.map((role, i) => (
                      <div key={i} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-accent-cyan/60" />

                        <h3 className="text-lg font-semibold text-text-light">
                          {role.title}
                        </h3>
                        <p className="text-sm text-text-muted-dark flex items-center gap-2 mb-3">
                          <Calendar className="w-3 h-3" />
                          {role.period}
                        </p>

                        {exp.highlights.length > 0 && (
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, j) => (
                              <li
                                key={j}
                                className="text-text-light/90 text-sm flex items-start gap-3"
                              >
                                <span className="text-accent-cyan mt-1 shrink-0">—</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
