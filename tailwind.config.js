module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sm: '180px',
        md: '460px',
        lg: '540px',
        xl: '820px',
       }  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
