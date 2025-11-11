/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          50:  '#f5fbff',
          100: '#eaf7ff',
          200: '#d6efff',
          300: '#bfe6ff',
          400: '#9bdcff',
          500: '#6fcfff', // primary pastel blue
          600: '#53b7ff',
          700: '#2f99ea',
          800: '#1f6fb3',
          900: '#144a79',
        },
        glass: {
          light: 'rgba(255,255,255,0.6)',
          subtle: 'rgba(255,255,255,0.45)'
        }
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(16, 24, 40, 0.06)',
        'glass': '0 8px 24px rgba(31, 99, 190, 0.08)'
      },
      borderRadius: {
        'xl-2': '1.125rem'
      }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: [],
}
