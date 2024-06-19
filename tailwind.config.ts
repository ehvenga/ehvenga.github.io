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
        cyan: {
          10: 'rgb(245, 255, 255)', // Custom cyan-10
          20: 'rgb(230, 254, 255)', // Custom cyan-20
          30: 'rgb(220, 253, 255)', // Custom cyan-30
        },
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
        'slide-up-ternary': {
          '0%': { transform: 'translateY(90%)', opacity: '0' },
          '90%': { transform: 'translateY(0)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'wave': {
          '0%, 20%, 83.33%, 100%': {
            transform: 'translateY(0)',
            color: 'rgb(22 78 99)',
          }, // normal position during pause
          '2%': { transform: 'translateY(-1px)', color: 'rgb(207 250 254)' }, // start of first slow wave
          '4%': { transform: 'translateY(-2px)', color: 'rgb(165 243 252)' },
          '6%': { transform: 'translateY(-3px)', color: 'rgb(103 232 249)' },
          '8%': { transform: 'translateY(-4px)', color: 'rgb(34 211 238)' },
          '10%': { transform: 'translateY(-5px)', color: 'rgb(6 182 212)' }, // peak of first slow wave
          '14%': { transform: 'translateY(0)', color: 'rgb(22 78 99)' }, // end of first slow wave
          '15.33%': { transform: 'translateY(-5px)', color: 'rgb(6 182 212)' }, // peak of second fast wave
          '16.67%': { transform: 'translateY(0)', color: 'rgb(22 78 99)' }, // end of second fast wave
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-up-secondary': 'slide-up-secondary 1s ease-out forwards',
        'slide-up-ternary': 'slide-up-ternary 1s ease-out forwards',
        'wave': 'wave 10s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
