import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, centered = true, light = false }) => {
  return (
    <div className={`mb-20 ${centered ? 'text-center' : 'text-left'} group`}>
      <div className={`inline-flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        <div className="h-[1px] w-8 bg-gold-500/50 group-hover:w-12 transition-all duration-500"></div>
        <span className="text-saffron-500 text-xs font-bold tracking-[0.3em] uppercase">
          {subtitle}
        </span>
        <div className="h-[1px] w-8 bg-gold-500/50 group-hover:w-12 transition-all duration-500"></div>
      </div>
      <h2 className={`text-5xl md:text-6xl lg:text-7xl font-decorative ${light ? 'text-white' : 'text-white'} mb-6 relative inline-block leading-tight pb-2`}>
        {title.split(" ").map((word, i) => (
           <span key={i} className={`${i % 2 !== 0 ? 'text-gradient-gold italic font-serif pb-2 inline-block' : 'inline-block'} mr-3`}>{word}</span>
        ))}
      </h2>
    </div>
  );
};

export default SectionTitle;