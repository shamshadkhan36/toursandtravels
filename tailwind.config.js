/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0B192C',
            dark: '#070F1E',
            light: '#142842',
            card: '#0F2137',
          },
          teal: {
            DEFAULT: '#0D9488',
            hover: '#0F766E',
            light: '#14B8A6',
            subtle: '#CCFBF1',
          },
          cyan: {
            DEFAULT: '#06B6D4',
            dark: '#0891B2',
            light: '#67E8F9',
          },
          accent: {
            DEFAULT: '#F59E0B',
            hover: '#D97706',
            light: '#FDE68A',
            coral: '#FF6B6B',
            orange: '#FB923C',
          },
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(13, 148, 136, 0.3)',
        'glow-accent': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
        'premium': '0 20px 40px -15px rgba(11, 25, 44, 0.08)',
        'card-hover': '0 25px 50px -12px rgba(11, 25, 44, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
