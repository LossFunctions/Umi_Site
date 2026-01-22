import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:umihuss@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/umihussaini/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/LossFunctions' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/LossFunctions' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-text-muted-dark text-sm order-2 md:order-1">
            © {currentYear} Umi Hussaini. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="p-2 text-text-muted-dark hover:text-accent-cyan hover:glow-cyan rounded-full transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
