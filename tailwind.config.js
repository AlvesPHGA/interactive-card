/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      colors: {
         // primary
         activeInput: 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
         errorInput: 'hsl(0, 100%, 66%)',

         // neutral
         white: 'hsl(0, 0%, 100%)',
         lightGrayshViolet: 'hsl(270, 3%, 87%)',
         darkGrayshViolet: 'hsl(279, 6%, 55%)',
         veryDarkViolet: 'hsl(278, 68%, 11%)',
      },

      fontFamily: {
         spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      extend: {},
   },
   plugins: [],
};
