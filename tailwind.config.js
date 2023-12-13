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

      extend: {
         backgroundImage: {
            cardBack: 'url(./public/images/bg-card-back.png)',
            cardFront: 'url(./public/images/bg-card-front.png)',

            mainDesktop: 'url(./public/images/bg-main-desktop.png)',
            mainMobile: 'url(./public/images/bg-main-mobile.png)',
         },

         backgroundSize: {
            thousand: '100% 100%',
            custom: '38% 100%',
         },
      },

      screens: {
         ss: { max: '320px' },
         sm: { min: '321px', max: '375px' },
         sl: { min: '376px', max: '425px' },
         st: { min: '426px', max: '768px' },
         sLap: { min: '769px', max: '1024px' },
      },
   },
   plugins: [],
};
