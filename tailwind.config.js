/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Steel Blue for Scientific Credibility
        primary: {
          50: '#E8F4FC',
          100: '#C5E4F7',
          200: '#8FC9EF',
          300: '#5AB0E7',
          400: '#2497DF',
          500: '#1281C4', // Main primary
          600: '#0E6BA8',
          700: '#0B558C',
          800: '#083F70',
          900: '#052954',
        },
        // Accent - Cyan for Pops
        accent: {
          50: '#F0FBFE',
          100: '#D6F4FC',
          200: '#A4E4FC', // Main accent
          300: '#7DD8FB',
          400: '#57CCFA',
          500: '#30C0F9',
          600: '#0BA4E0',
          700: '#0980B0',
          800: '#075C80',
          900: '#053850',
        },
        // Secondary - Teal for Health/Science
        secondary: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6', // Main secondary
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        // Dark Theme Backgrounds
        dark: {
          900: '#0A0E27', // Main background
          800: '#0F1538', // Secondary background
          700: '#151B42', // Tertiary background
          600: '#1A2252', // Surface
          500: '#222B66', // Elevated surface
          400: '#2A3580',
          300: '#334099',
          200: '#3B4AB3',
          100: '#4454CC',
        },
        // Status Colors
        success: {
          50: 'rgba(34, 197, 94, 0.1)',
          100: 'rgba(34, 197, 94, 0.15)',
          500: '#22C55E',
          600: '#16A34A',
        },
        warning: {
          50: 'rgba(245, 158, 11, 0.1)',
          100: 'rgba(245, 158, 11, 0.15)',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: 'rgba(239, 68, 68, 0.1)',
          100: 'rgba(239, 68, 68, 0.15)',
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['Libre Franklin', 'system-ui', 'sans-serif'],
        heading: ['IBM Plex Serif', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'lg': '0 12px 32px rgba(0, 0, 0, 0.5)',
        'xl': '0 24px 48px rgba(0, 0, 0, 0.6)',
        'glow': '0 0 40px rgba(18, 129, 196, 0.3)',
        'glow-accent': '0 0 30px rgba(164, 228, 252, 0.2)',
        'glow-success': '0 0 20px rgba(34, 197, 94, 0.3)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0A0E27 0%, #151B42 50%, #0A1E3F 100%)',
        'gradient-radial': 'radial-gradient(circle at 50% 0%, #151B42 0%, #0A0E27 70%)',
        'gradient-primary': 'linear-gradient(135deg, #1A9FE8 0%, #A4E4FC 100%)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(18, 129, 196, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(18, 129, 196, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
