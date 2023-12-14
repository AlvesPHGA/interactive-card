import React from 'react';

const imgCard = {
   back: 'bg-center bg-thousand bg-no-repeat w-96 h-52',
};

const Cards = () => {
   return (
      <section className="flex flex-col gap-8 ss:gap-0 ss:h-72 ss:w-screen ss:p-5 ss:static sm:gap-0 sm:h-72 sm:w-screen sm:p-5 sm:static sl:gap-0 sl:h-72 sl:w-screen sl:p-5 sl:static">
         <div
            className={`bg-cardFront px-7 py-5 flex flex-col justify-end relative ${imgCard.back} ss:absolute ss:w-[280px] ss:top-[127px] ss:h-40 ss:z-10 ss:py-4 ss:px-6 sm:absolute sm:w-[280px] sm:top-[127px] sm:h-40 sm:z-10 sm:py-4 sm:px-6  sl:absolute sl:w-[280px] sl:top-[127px] sl:h-40 sl:z-10 sl:py-4 sl:px-6`}
         >
            <img
               className="absolute left-7 top-5 ss:h-10 ss:top-4 ss:left-[1.40rem] sm:h-10 sm:top-4 sm:left-[1.40rem]  sl:h-10 sl:top-4 sl:left-[1.40rem]"
               src="../public/svg/card-logo.svg"
               alt=""
            />

            <div className="text-white">
               <h1
                  id="numberCard"
                  className="mb-3 text-2xl tracking-widest ss:text-base sm:text-base  sl:text-base"
               >
                  0000 0000 0000 0000
               </h1>
               <div className="flex justify-between uppercase text-base items-center ss:text-xs sm:text-xs sl:text-xs">
                  <span id="nameCard">Person name</span>
                  <div>
                     <span id="monthCard">00</span>/
                     <span id="yearCard">00</span>
                  </div>
               </div>
            </div>
         </div>

         <div
            className={`bg-cardBack ml-16 relative ${imgCard.back} ss:w-full ss:h-40 ss:z-0 ss:m-0 ss:bg-[100% 100%] sm:w-[280px] sm:h-40 sm:z-0 sm:m-0 sm:bg-[100% 100%] sm:ml-auto  sl:w-[280px] sl:h-40 sl:z-0 sl:m-0 sl:bg-[100% 100%] sl:ml-auto`}
         >
            <span
               id="cvcCard"
               className="absolute top-[5.75rem] left-[19.5rem] text-white text-sm ss:left-[13.5rem] ss:top-[4.3rem] sm:left-[13.5rem] sm:top-[4.3rem]  sl:left-[13.5rem] sl:top-[4.3rem]"
            >
               000
            </span>
         </div>
      </section>
   );
};

export default Cards;
