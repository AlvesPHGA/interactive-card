/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{ js, ts, tsx}'],
   theme: {
      colors: {
         active_input_border: 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
         input_error: 'hsl(0, 100%, 66%)',

         white: 'hsl(0, 0%, 100%)',
         light_grayish_violet: 'hsl(270, 3%, 87%)',
         dark_grayish_violet: 'hsl(279, 6%, 55%)',
         very_dark_violet: 'hsl(278, 68%, 11%)',
      },

      extend: {
         backgroundImage: {
            'card-back': 'url(./public/images/bg-card-back.png)',
            'card-front': 'url(./public/images/bg-card-front.png)',
            'main-desktop': 'url(./public/images/bg-main-desktop.png)',
            'main-mobile': 'url(./public/images/bg-main-mobile.png)',
         },
      },

      fontFamily: {
         space_grotesk: ['Space Grotesk', 'sans-serif'],
      },
   },
   plugins: [],
};
