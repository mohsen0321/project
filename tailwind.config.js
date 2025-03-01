// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // يشمل جميع ملفات React
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        lineFadeIn: 'lineFadeIn 0.8s ease-out forwards',
        fadeInCard: 'fadeInCard 0.8s ease-out forwards',
        slideUp: 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineFadeIn: {
          '0%': { opacity: '0', width: '0%' },
          '100%': { opacity: '1', width: '20%' },
        },
        fadeInCard: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(50px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

