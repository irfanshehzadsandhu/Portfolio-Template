/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3F1EC',
        surface: '#EAE7E0',
        ink: '#1A1C1B',
        muted: '#5C615E',
        soft: '#8A8F8B',
        line: '#D4D0C8',
        accent: '#0F5C5C',
        accentSoft: '#147272',
        accentMuted: '#C5DADA',
        night: '#141816',
        cream: '#FAF8F4',
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(26, 28, 27, 0.08)',
        lift: '0 20px 50px rgba(26, 28, 27, 0.12)',
      },
      screens: {
        xs: '450px',
        xmd: '900px',
      },
      backgroundImage: {
        grain:
          'radial-gradient(ellipse at 20% 0%, rgba(15, 92, 92, 0.08), transparent 50%), radial-gradient(ellipse at 90% 20%, rgba(26, 28, 27, 0.06), transparent 45%)',
        heroWash:
          'linear-gradient(180deg, rgba(20, 24, 22, 0.55) 0%, rgba(20, 24, 22, 0.72) 45%, rgba(20, 24, 22, 0.92) 100%)',
      },
    },
  },
  plugins: [],
};
