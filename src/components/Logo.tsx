import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  showTagline = true,
  size = 'md',
  className = '',
}) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  const currentHeight = heightClasses[size];

  return (
    <div className={`flex flex-col items-start select-none group ${className}`}>
      {/* Official Client Logo Image Asset */}
      <img
        src="/logo-transmart.png"
        alt="TranSmart Logística Inteligente"
        className={`${currentHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          variant === 'dark' ? 'brightness-110 contrast-125' : ''
        }`}
      />

      {showTagline && (
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-1 ${
            variant === 'dark' ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Logística Inteligente
        </span>
      )}
    </div>
  );
};
