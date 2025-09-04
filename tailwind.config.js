/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#c900ff',
          600: '#b300e6',
          700: '#9900cc'
        },
        secondary: {
          500: '#330040',
          600: '#2a0033',
          700: '#1f0026'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #c900ff 0%, #330040 100%)',
        'gradient-light': 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
      },
      animation: {
        'text-cycle': 'textCycle 10s infinite',
        'wipe': 'wipe 0.3s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'scroll-x': 'scrollX 40s linear infinite',
      },
      keyframes: {
        textCycle: {
          '0%, 18%': { opacity: '1' },
          '20%, 38%': { opacity: '0' },
          '40%, 58%': { opacity: '1' },
          '60%, 78%': { opacity: '0' },
          '80%, 98%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        wipe: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px rgba(201, 0, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(201, 0, 255, 0.6)' }
        },
        scrollX: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
};
