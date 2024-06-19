import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(60%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up-secondary': {
          '0%': { transform: 'translateY(70%)', opacity: '0' },
          '60%': { transform: 'translateY(0)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        shine: {
          '0%, 100%': { color: 'rgb(22 78 99)' }, // text-cyan-50
          '10%': { color: 'rgb(207 250 254)' }, // text-cyan-100
          '20%': { color: 'rgb(165 243 252)' }, // text-cyan-200
          '30%': { color: 'rgb(103 232 249)' }, // text-cyan-300
          '40%': { color: 'rgb(34 211 238)' }, // text-cyan-400
          '50%': { color: 'rgb(6 182 212)' }, // text-cyan-500
          '60%': { color: 'rgb(8 145 178)' }, // text-cyan-600
          '70%': { color: 'rgb(14 116 144)' }, // text-cyan-700
          '80%': { color: 'rgb(21 94 117)' }, // text-cyan-800
          '90%': { color: 'rgb(22 78 99)' }, // text-cyan-900
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-up-secondary': 'slide-up-secondary 1s ease-out forwards',
        'wave': 'wave 1s linear infinite 10s',
        'shine': 'shine 1s linear infinite 10s',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
