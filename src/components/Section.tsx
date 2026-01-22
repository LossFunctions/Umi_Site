import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  variant = 'light',
  className = '',
  id,
}) => {
  const baseStyles = 'py-16 md:py-24';
  const variantStyles = variant === 'dark'
    ? 'section-dark bg-grid-dark'
    : 'section-light';

  return (
    <section id={id} className={`${baseStyles} ${variantStyles} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;
