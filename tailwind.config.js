/** @type {import('tailwindcss').Config} */
// BUILD AI SUMMIT 1.0 design tokens.
// Legacy token names from the NSS build are kept as aliases and remapped to the
// new palette so every existing utility class recolors automatically:
//   nigeria-green -> volt violet (primary accent)
//   fintech-gold  -> signal cyan (secondary accent)
//   deep-navy     -> void (page background)
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // New semantic tokens
        'void': '#050510',
        'surface': '#0B0B1E',
        'panel': '#131330',
        'volt': '#8B5CF6',
        'volt-deep': '#6D28D9',
        'signal': '#22D3EE',
        'signal-deep': '#06B6D4',
        'mist': '#A3A8C3',
        'faint': '#6B7090',

        // Legacy aliases (remapped)
        'deep-navy': '#050510',
        'navy-surface': '#0B0B1E',
        'navy-light': '#131330',
        'royal-blue': '#4F46E5',
        'electric-blue': '#818CF8',
        'cyan': '#22D3EE',
        'dark-teal': '#0E7490',
        'teal': '#22D3EE',
        'teal-dark': '#155E75',
        'nigeria-green': '#8B5CF6',
        'green-light': '#A78BFA',
        'purple': '#8B5CF6',
        'purple-light': '#A78BFA',
        'fintech-gold': '#22D3EE',
        'gold-dark': '#06B6D4',
        'text-grey': '#A3A8C3',
        'text-light': '#C7CBE0',
        'light-bg': '#0B0B1E',
      },
      fontFamily: {
        satoshi: ['Space Grotesk', 'sans-serif'], // display (legacy class name kept)
        display: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(5, 5, 16, 0.92) 0%, rgba(109, 40, 217, 0.45) 35%, rgba(34, 211, 238, 0.25) 65%, rgba(5, 5, 16, 0.95) 100%)',
        'energy-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)',
        'blue-purple-gradient': 'linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%)',
        'gold-gradient': 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
        'green-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
        'rich-gradient': 'linear-gradient(135deg, #050510 0%, #1E1B4B 25%, #6D28D9 50%, #1E1B4B 75%, #050510 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-right': 'slideRight 60s linear infinite',
        'slide-left': 'slideLeft 60s linear infinite',
        'blink': 'blink 1.1s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 30px rgba(139, 92, 246, 0.35)',
        'glow-gold': '0 0 30px rgba(34, 211, 238, 0.35)',
        'glow-blue': '0 0 30px rgba(99, 102, 241, 0.3)',
        'glow-volt': '0 0 30px rgba(139, 92, 246, 0.35)',
        'glow-signal': '0 0 30px rgba(34, 211, 238, 0.35)',
      },
    },
  },
  plugins: [],
};
