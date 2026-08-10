import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  showTagline = true,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-2xl', sub: 'text-[10px]' },
    lg: { icon: 'w-12 h-12', text: 'text-3xl', sub: 'text-[11px]' },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Wordmark: Tran (Green) + Smart (Cyan) */}
      <div className="flex flex-col">
        <div className="flex items-center font-extrabold tracking-tight leading-none">
          <span className={`text-[#78AB59] ${currentSize.text}`}>Tran</span>
          <span className={`text-[#3FA3C4] ${currentSize.text}`}>Smart</span>
          
          {/* Isometric 3D Hexagon Emblem (Gold) */}
          <svg
            className={`${currentSize.icon} ml-1.5 drop-shadow-sm group-hover:scale-105 transition-transform duration-300`}
            viewBox="0 0 100 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hexagon Outer Frame */}
            <polygon points="50,5 95,30 95,85 50,110 5,85 5,30" fill="none" stroke="#C0A045" strokeWidth="7" strokeLinejoin="round" />
            
            {/* 3D Cube Faces */}
            {/* Top Face */}
            <polygon points="50,12 87,33 50,54 13,33" fill="#D8BE68" fillOpacity="0.4" stroke="#C0A045" strokeWidth="3" />
            {/* Left Face */}
            <polygon points="13,33 50,54 50,101 13,80" fill="#B09035" fillOpacity="0.3" stroke="#C0A045" strokeWidth="3" />
            {/* Right Face */}
            <polygon points="50,54 87,33 87,80 50,101" fill="#D8BE68" fillOpacity="0.6" stroke="#C0A045" strokeWidth="3" />

            {/* Letter 'T' on Left Face */}
            <text x="31" y="76" fontStyle="normal" fontWeight="900" fontSize="38" fill="#C0A045" textAnchor="middle" fontFamily="sans-serif">T</text>
            
            {/* Letter 'S' on Right Face */}
            <text x="69" y="76" fontStyle="normal" fontWeight="900" fontSize="38" fill="#C0A045" textAnchor="middle" fontFamily="sans-serif">S</text>
          </svg>
        </div>

        {showTagline && (
          <span
            className={`${currentSize.sub} font-semibold uppercase tracking-widest mt-0.5 ${
              variant === 'dark' ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Logística Inteligente
          </span>
        )}
      </div>
    </div>
  );
};
