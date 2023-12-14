import React from 'react';

const imgCard = {
   back: 'bg-center bg-thousand bg-no-repeat w-96 h-52',
};

const Cards = () => {
   return (
      <section className="flex flex-col gap-8 ss:gap-0 ss:h-72 ss:w-screen ss:p-5 ss:static">
         <div
            className={`bg-cardFront px-7 py-5 flex flex-col justify-end relative ${imgCard.back} ss:absolute ss:w-[280px] ss:top-[127px] ss:h-40 ss:z-10 ss:py-4 ss:px-6`}
         >
            <img
               className="absolute left-7 top-5"
               src="../public/svg/card-logo.svg"
               alt=""
            />

            <div className="text-white">
               <h1
                  id="numberCard"
                  className="mb-3 text-2xl tracking-widest ss:text-base"
               >
                  0000 0000 0000 0000
               </h1>
               <div className="flex justify-between uppercase text-base items-center ss:text-xs">
                  <span id="nameCard">Person name</span>
                  <div>
                     <span id="monthCard">00</span>/
                     <span id="yearCard">00</span>
                  </div>
               </div>
            </div>
         </div>
         <div
            className={`bg-cardBack ml-16 relative ${imgCard.back} ss:w-full ss:h-40 ss:z-0 ss:m-0 ss:bg-[100% 100%]`}
         >
            <span
               id="cvcCard"
               className="absolute top-[5.75rem] left-[19.5rem] text-white text-sm ss:left-[13.5rem] ss:top-[4.3rem]"
            >
               000
            </span>
         </div>
      </section>
   );
};

export default Cards;
