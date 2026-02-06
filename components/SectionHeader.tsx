
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
