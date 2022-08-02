/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        primary: '#1F4690',
        Secondary: '#3A5BA0',
        bttn: '#FFA500',
        
        bgc: '#F7F7F7',
        bgcs: '#FFE5B4'
      },
      screen : {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
