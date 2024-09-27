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
        'wave-or': {
          '0%, 20%, 83.33%, 100%': {
            transform: 'translateY(0)',
            color: 'rgb(154 52 18)', // orange-800
          },
          '2%': { transform: 'translateY(-1px)', color: 'rgb(254 237 200)' }, // orange-100
          '4%': { transform: 'translateY(-2px)', color: 'rgb(254 215 170)' }, // orange-200
          '6%': { transform: 'translateY(-3px)', color: 'rgb(253 186 116)' }, // orange-300
          '8%': { transform: 'translateY(-4px)', color: 'rgb(251 146 60)' }, // orange-400
          '10%': { transform: 'translateY(-5px)', color: 'rgb(249 115 22)' }, // orange-500
          '14%': { transform: 'translateY(0)', color: 'rgb(154 52 18)' }, // back to orange-800
          '15.33%': { transform: 'translateY(-5px)', color: 'rgb(249 115 22)' }, // orange-500
          '16.67%': { transform: 'translateY(0)', color: 'rgb(154 52 18)' }, // back to orange-800
        },
        'wave-ro': {
          '0%, 20%, 83.33%, 100%': {
            transform: 'translateY(0)',
            color: 'rgb(159 18 57)', // rose-800
          },
          '2%': { transform: 'translateY(-1px)', color: 'rgb(255 228 230)' }, // rose-100
          '4%': { transform: 'translateY(-2px)', color: 'rgb(254 205 211)' }, // rose-200
          '6%': { transform: 'translateY(-3px)', color: 'rgb(253 164 175)' }, // rose-300
          '8%': { transform: 'translateY(-4px)', color: 'rgb(251 113 133)' }, // rose-400
          '10%': { transform: 'translateY(-5px)', color: 'rgb(244 63 94)' }, // rose-500
          '14%': { transform: 'translateY(0)', color: 'rgb(159 18 57)' }, // back to rose-800
          '15.33%': { transform: 'translateY(-5px)', color: 'rgb(244 63 94)' }, // rose-500
          '16.67%': { transform: 'translateY(0)', color: 'rgb(159 18 57)' }, // back to rose-800
        },
        'wave-em': {
          '0%, 20%, 83.33%, 100%': {
            transform: 'translateY(0)',
            color: 'rgb(6 95 70)', // emerald-800
          },
          '2%': { transform: 'translateY(-1px)', color: 'rgb(209 250 229)' }, // emerald-100
          '4%': { transform: 'translateY(-2px)', color: 'rgb(167 243 208)' }, // emerald-200
          '6%': { transform: 'translateY(-3px)', color: 'rgb(110 231 183)' }, // emerald-300
          '8%': { transform: 'translateY(-4px)', color: 'rgb(52 211 153)' }, // emerald-400
          '10%': { transform: 'translateY(-5px)', color: 'rgb(16 185 129)' }, // emerald-500
          '14%': { transform: 'translateY(0)', color: 'rgb(6 95 70)' }, // back to emerald-800
          '15.33%': { transform: 'translateY(-5px)', color: 'rgb(16 185 129)' }, // emerald-500
          '16.67%': { transform: 'translateY(0)', color: 'rgb(6 95 70)' }, // back to emerald-800
        },
        'slideInLeft': {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '100%': { transform: 'translateX(100%)', opacity: '1' },
        },
        'slideDown': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'growFromRight': {
          '0%': { width: '0%', right: '0' },
          '100%': { width: '100%', right: '0' },
        },
        'slideInFromRight': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-up-secondary': 'slide-up-secondary 1s ease-out forwards',
        'slide-up-ternary': 'slide-up-ternary 1s ease-out forwards',
        'wave': 'wave 10s ease-in-out infinite',
        'wave-or': 'wave-or 10s ease-in-out infinite',
        'wave-ro': 'wave-ro 10s ease-in-out infinite',
        'wave-em': 'wave-em 10s ease-in-out infinite',
        'slideInLeft': 'slideInLeft 1s ease-out forwards',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'growFromRight': 'growFromRight 1s forwards',
        'slideInFromRight': 'slideInFromRight 0.5s forwards',
        'slideDown': 'slideDown 0.7s ease-out forwards',
        'slideUp': 'slideUp 0.3s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
