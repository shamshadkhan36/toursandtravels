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
            DEFAULT: '#0F172A',
            dark: '#020617',
            light: '#1E293B',
            card: '#334155',
          },
          teal: {
            DEFAULT: '#0D9488',
            hover: '#0F766E',
            light: '#14B8A6',
            subtle: '#F0FDFA',
            50: '#F0FDFA',
            100: '#CCFBF1',
          },
          cyan: {
            DEFAULT: '#0284C7',
            hover: '#0369A1',
            light: '#38BDF8',
            subtle: '#F0F9FF',
          },
          coral: {
            DEFAULT: '#FF6B6B',
            hover: '#FA5252',
            light: '#FFA8A8',
            subtle: '#FFF5F5',
          },
          emerald: {
            DEFAULT: '#10B981',
            hover: '#059669',
            light: '#34D399',
            subtle: '#ECFDF5',
          },
          purple: {
            DEFAULT: '#8B5CF6',
            hover: '#7C3AED',
            light: '#A78BFA',
            subtle: '#F5F3FF',
          },
          rose: {
            DEFAULT: '#F43F5E',
            hover: '#E11D48',
            light: '#FB7185',
            subtle: '#FFF1F2',
          },
          accent: {
            DEFAULT: '#F59E0B',
            hover: '#D97706',
            light: '#FDE68A',
            coral: '#FF6B6B',
            orange: '#FB923C',
            gradientStart: '#FF7E5F',
            gradientEnd: '#FEB47B',
          },
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
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
        'glow': '0 0 25px -5px rgba(13, 148, 136, 0.35)',
        'glow-accent': '0 10px 25px -5px rgba(245, 158, 11, 0.45)',
        'glow-coral': '0 10px 25px -5px rgba(255, 107, 107, 0.4)',
        'glow-cyan': '0 10px 25px -5px rgba(2, 132, 199, 0.35)',
        'glow-purple': '0 10px 25px -5px rgba(139, 92, 246, 0.35)',
        'premium': '0 20px 40px -15px rgba(15, 23, 42, 0.07)',
        'card-hover': '0 25px 50px -12px rgba(15, 23, 42, 0.12)',
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
