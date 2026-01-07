'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

export default function Logo({ className = '', size = 'md', variant = 'full' }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg', tagline: 'text-[8px]' },
    md: { icon: 36, text: 'text-xl', tagline: 'text-[10px]' },
    lg: { icon: 48, text: 'text-2xl', tagline: 'text-xs' },
  };

  const { icon, text, tagline } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Modern DNA/Peptide Icon with gradient */}
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-science-500 rounded-xl blur-lg opacity-30"></div>

        <svg
          width={icon}
          height={icon}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative flex-shrink-0"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066cc" />
              <stop offset="50%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#00aa66" />
            </linearGradient>
            <linearGradient id="logoGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>

          {/* Background circle with gradient border */}
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="2"
          />

          {/* Inner glow circle */}
          <circle
            cx="24"
            cy="24"
            r="18"
            fill="url(#logoGradient)"
            fillOpacity="0.1"
          />

          {/* Modern DNA helix - simplified and elegant */}
          <g stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none">
            {/* Left strand */}
            <path d="M14 14 C18 18, 18 22, 14 26 C10 30, 10 34, 14 38" />
            {/* Right strand */}
            <path d="M34 14 C30 18, 30 22, 34 26 C38 30, 38 34, 34 38" />
          </g>

          {/* Connection rungs */}
          <g stroke="url(#logoGradientLight)" strokeWidth="2" strokeLinecap="round">
            <line x1="17" y1="16" x2="31" y2="16" />
            <line x1="14" y1="22" x2="34" y2="22" />
            <line x1="14" y1="28" x2="34" y2="28" />
            <line x1="17" y1="34" x2="31" y2="34" />
          </g>

          {/* Molecule nodes with gradient */}
          <circle cx="14" cy="14" r="3.5" fill="url(#logoGradient)" />
          <circle cx="34" cy="14" r="3.5" fill="url(#logoGradient)" />
          <circle cx="14" cy="26" r="2.5" fill="url(#logoGradientLight)" />
          <circle cx="34" cy="26" r="2.5" fill="url(#logoGradientLight)" />
          <circle cx="14" cy="38" r="3.5" fill="url(#logoGradient)" />
          <circle cx="34" cy="38" r="3.5" fill="url(#logoGradient)" />
        </svg>
      </div>

      {variant === 'full' && (
        <div className="flex flex-col">
          <span className={`font-bold ${text} bg-gradient-to-r from-primary-600 via-primary-500 to-science-500 bg-clip-text text-transparent tracking-tight`}>
            PeptideLab
          </span>
          <span className={`${tagline} text-gray-500 tracking-[0.2em] uppercase -mt-0.5 font-medium`}>
            Research Peptides
          </span>
        </div>
      )}
    </div>
  );
}
