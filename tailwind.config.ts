import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        sm: '1rem',
        lg: '45px',
        xl: '5rem',
        '2xl': '13rem',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'floating': 'floating 3s ease-in-out infinite',
        'text-path': 'text-path 5s ease-in-out infinite',
      },
      keyframes: {
        'floating': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'text-path': {
          '0%,100%': { clipPath: 'ellipse(20px 50% at left center)' },
          '50%': { clipPath: 'ellipse(50px 50% at right center)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config