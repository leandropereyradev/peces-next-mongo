module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'betta': "url('/images/betta-fondo.jpg')",
      },
      boxShadow:{
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
};
