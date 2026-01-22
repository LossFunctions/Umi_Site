import React from 'react';
import Section from './Section';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'umihuss@gmail.com',
    href: 'mailto:umihuss@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/umihussaini',
    href: 'https://www.linkedin.com/in/umihussaini/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/LossFunctions',
    href: 'https://github.com/LossFunctions',
  },
];

const Contact: React.FC = () => {
  return (
    <Section variant="dark" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-4">
          Let's Connect
        </h2>
        <p className="text-lg text-text-muted-dark mb-12">
          Whether you want to discuss AI, Programmatic, or reach out on an opportunity-- I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="card card-dark flex items-center gap-4 group hover:border-accent-cyan/50 hover:glow-cyan transition-all"
            >
              <div className="p-3 bg-accent-cyan/10 rounded-lg group-hover:bg-accent-cyan/20 transition-colors">
                <Icon className="w-5 h-5 text-accent-cyan" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-text-muted-dark">{label}</p>
                <p className="text-text-light font-medium">{value}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-text-muted-dark group-hover:text-accent-cyan transition-colors" />
            </a>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="mailto:umihuss@gmail.com"
            className="btn-pill btn-pill-primary text-lg px-8 py-4 glow-cyan-strong"
          >
            Send me an email
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
