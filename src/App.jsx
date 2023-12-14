import React from 'react';
import Cards from './Components/Cards';
import NameField from './Components/NameField';
import NumberCardField from './Components/NumberCardField';
import CvcField from './Components/CvcField';
import Button from './Components/Button';
import Month from './Components/Month';
import Year from './Components/Year';

import useForm from './Hooks/useForm';

function App() {
   const name = useForm('');
   const number = useForm('number');
   const month = useForm('');
   const year = useForm('');
   const cvc = useForm('');

   function handleSubmit(ev) {
      ev.preventDefault();

      if (
         name.validate() &&
         number.validate() &&
         month.validate() &&
         year.validate() &&
         cvc.validate()
      ) {
         alert('Informações enviadas com sucesso');
      } else {
         alert('Por favor, tente mais tarde.');
      }
   }

   return (
      <main className="font-spaceGrotesk relative text-lg h-screen bg-mainDesktop bg-custom bg-no-repeat ss:bg-none sm:bg-none sl:bg-none">
         <div className="hidden ss:block ss:bg-mainMobile ss:absolute ss:top-0 ss:left-0 ss:w-screen ss:h-52 ss:bg-cover sm:block sm:bg-mainMobile sm:absolute sm:top-0 sm:left-0 sm:w-screen sm:h-52 sm:bg-cover sl:block sl:bg-mainMobile sl:absolute sl:top-0 sl:left-0 sl:w-screen sl:h-52 sl:bg-cover"></div>

         <section className="absolute transform -translate-x-1/2 left-2/4 -translate-y-1/2 top-2/4  flex mx-auto justify-center gap-40 items-center w-[1200px] ss:w-full ss:flex-col ss:h-min ss:gap-0 ss:-translate-x-0 ss:left-0 ss:-translate-y-0 ss:top-0 sm:w-full sm:flex-col sm:h-min sm:gap-0 sm:-translate-x-0 sm:left-0 sm:-translate-y-0 sm:top-0 sl:w-full sl:flex-col sl:h-min sl:gap-0 sl:-translate-x-0 sl:left-0 sl:-translate-y-0 sl:top-0">
            <Cards />

            <form
               onSubmit={handleSubmit}
               className="w-fit ss:px-5 ss:w-full ss:mt-5 ss:mb-5 sm:px-5 sm:w-full sm:mt-5 sm:mb-5 sl:px-5 sl:w-full sl:mt-5 sl:mb-5"
            >
               <NameField {...name} />
               <NumberCardField {...number} />

               <div className="flex  gap-x-5 sl:justify-between">
                  <div className="relative">
                     <label className="text-base text-veryDarkViolet ss:text-sm sm:text-sm sl:text-sm">
                        EXP. DATE (MM/YY)
                     </label>
                     <div className="relative h-10">
                        <div className="flex gap-x-2.5">
                           <Month {...month} />
                           <Year {...year} />
                        </div>
                        {month.error && (
                           <p className="absolute top-full text-xs text-errorInput">
                              {month.error}
                           </p>
                        )}
                        {year.error && (
                           <p className="absolute top-full text-xs text-errorInput">
                              {year.error}
                           </p>
                        )}
                     </div>
                  </div>
                  <CvcField {...cvc} />
               </div>

               <Button />
            </form>
         </section>
      </main>
   );
}

export default App;
