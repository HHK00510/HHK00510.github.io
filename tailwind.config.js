/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./hugo_stats.json"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FAFC',
          100: '#D5F3FA',
          200: '#A9E8F6',
          600: '#7ADCF6', // Primary Brand Color
          700: '#52CDEE',
          800: '#0F5468',
        },
        accent: {
          500: '#D99B26', // Warm Gold
          600: '#B8821D',
        },
        cream: '#FAF8F5',
        charcoal: '#222222'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['Lora', 'serif'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
