import React from 'react';
import Input from './Components/Input';

const inputDefaultCSS = {
   def01: 'border border-lightGrayshViolet rounded',
};

const imgCard = {
   back: 'bg-center bg-thousand bg-no-repeat w-96 h-52',
};

function App() {
   return (
      <main className="font-spaceGrotesk text-lg border h-screen bg-mainDesktop bg-custom bg-no-repeat">
         <section className="flex mx-auto translate-y-2/4 justify-center gap-40 items-center w-[1200px]">
            <div className="flex flex-col gap-8">
               <div
                  className={`bg-cardFront px-7 py-5 flex flex-col justify-end relative ${imgCard.back}`}
               >
                  <img
                     className="absolute left-7 top-5"
                     src="../public/svg/card-logo.svg"
                     alt=""
                  />

                  <div className="text-white">
                     <h1 className="mb-3 text-2xl tracking-widest">
                        0000 0000 0000 0000
                     </h1>
                     <div className="flex justify-between uppercase text-base items-center">
                        <span>Person name</span>
                        <span>00/00</span>
                     </div>
                  </div>
               </div>
               <div className={`bg-cardBack ml-16 relative ${imgCard.back}`}>
                  <span className="absolute top-[5.75rem] left-[19.5rem] text-white text-sm">
                     000
                  </span>
               </div>
            </div>
            <form className="w-fit">
               <div>
                  <Input
                     className={`${inputDefaultCSS.def01} w-full p-2 flex flex-col`}
                     label="CARDHOLDER NAME"
                     id="name"
                     placeholder="e.g. Jane Appleseed"
                  />
               </div>

               <div className="my-4">
                  <Input
                     className={`${inputDefaultCSS.def01} w-full p-2 flex flex-col`}
                     label="CARD NUMBER"
                     id="number"
                     placeholder="e.g. 1234 5678 9123 0000"
                  />
               </div>

               <div className="flex  gap-x-5">
                  <div>
                     <label className="text-base text-veryDarkViolet">
                        EXP. DATE (MM/YY)
                     </label>
                     <div className="flex gap-x-2.5">
                        <Input
                           className={`${inputDefaultCSS.def01} p-1 w-20`}
                           id="month"
                           placeholder="MM"
                        />
                        <Input
                           className={`${inputDefaultCSS.def01} p-1 w-20`}
                           id="years"
                           placeholder="YY"
                        />
                     </div>
                  </div>
                  <div>
                     <Input
                        className={`${inputDefaultCSS.def01} w-36 p-1 flex flex-col`}
                        label="CVC"
                        id="cvc"
                        placeholder="e.g. 123"
                     />
                  </div>
               </div>
               <button className="w-full bg-veryDarkViolet py-3 mt-10 rounded-md cursor-pointer text-white hover:bg-opacity-90">
                  Confirm
               </button>
            </form>
         </section>
      </main>
   );
}

export default App;
